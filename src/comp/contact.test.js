import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from './contact';


global.fetch = jest.fn();
global.alert = jest.fn();


describe('Contact Component', () => {
    beforeEach(() => {
        fetch.mockClear();
        alert.mockClear();
    });

    it('renders input fields and button', () => {
        render(<Contact />);

        expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('E-Mail')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Message')).toBeInTheDocument();
        expect(screen.getByText('Send')).toBeInTheDocument();
    })

    it('updates form state on user input', () => {
        render(<Contact />);

        fireEvent.change(screen.getByPlaceholderText('Name'), {
            target: {name: 'Name', value: 'Jacob'},
        });
        fireEvent.change(screen.getByPlaceholderText('E-Mail'), {
            target: {name: 'email', value: 'jacob@email.com'},
        });
        fireEvent.change(screen.getByPlaceholderText('Subject'), {
            target: {name: 'subject', value: 'subject example'},
        });
        fireEvent.change(screen.getByPlaceholderText('Message'), {
            target: {name: 'Message', value: 'Example message'},
        });

        expect(screen.getByDisplayValue('Jacob')).toBeInTheDocument();
        expect(screen.getByDisplayValue('jacob@email.com')).toBeInTheDocument();
        expect(screen.getByDisplayValue('subject example')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Example message')).toBeInTheDocument();
    });

    it('submits form and shows success alert', async ()=> {
        fetch.mockResolvedValueOnce({ok:true});

        render(<Contact />);

        fireEvent.change(screen.getByPlaceholderText('Name'), {
            target: {name: 'Name', value: 'Sarah'},
        });
        fireEvent.change(screen.getByPlaceholderText('E-Mail'), {
            target: {name: 'email', value: 'sarah@email.com'},
        })
        fireEvent.change(screen.getByPlaceholderText('Subject'), {
            target: {name: 'subject', value: 'Question'},
        });
        fireEvent.change(screen.getByPlaceholderText('Message'), {
            target: {name: 'Message', value: 'I have a question'},
        });

        fireEvent.click(screen.getByText('Send'));

        await waitFor(() => {
            expect(fetch).toHaveBeenCalledWith('https://cpsc362-rthreads-default-rtdb.firebaseio.com/Contact.json',
            expect.objectContaining({
                method: 'POST',
                body: JSON.stringify({
                    Name: 'Sarah',
                    email: 'sarah@email.com',
                    subject: 'Question',
                    Message: 'I have a question',
                }),
            })
         );
         expect(alert).toHaveBeenCalledWith('Message Sent');
        });
    });

    it('shows error alert if fetch fails', async () => {
        fetch.mockResolvedValueOnce(undefined);

        render(<Contact />);

        fireEvent.click(screen.getByText('Send'));

        await waitFor(() => {
            expect(alert).toHaveBeenCalledWith('Error Occured, Message Sent Failed');
        });
    });
});