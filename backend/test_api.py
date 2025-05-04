import requests

BASE_URL = "http://localhost:5000"
sample_product = {
    "Name": "Test Product",
    "Price": 9.99,
    "cat": "TestCategory"
}

def test_add_product():
    response = requests.post(f"{BASE_URL}/api/products", json=sample_product)
    assert response.status_code == 201
    product = response.json()
    print("Added Product:", product)
    return product["id"]  # assuming your backend returns the ID as _id

def test_get_all_products():
    response = requests.get(f"{BASE_URL}/api/products")
    assert response.status_code == 200
    assert isinstance(response.json(), list)
    print("All Products:", response.json())

def test_filter_products_by_category():
    response = requests.get(f"{BASE_URL}/api/products", params={"category": "TestCategory"})
    assert response.status_code == 200
    filtered = response.json()
    assert any(p["cat"] == "TestCategory" for p in filtered)
    print("Filtered Products:", filtered)

def test_update_product(product_id):
    updated = {"Name": "Updated Name"}
    response = requests.put(f"{BASE_URL}/api/products/{product_id}", json=updated)
    assert response.status_code == 200
    print("Updated Product:", response.json())

def test_delete_product(product_id):
    response = requests.delete(f"{BASE_URL}/api/products/{product_id}")
    assert response.status_code == 200
    print("Delete Response:", response.json())

if __name__ == "__main__":
    # Run all tests sequentially
    pid = test_add_product()
    test_get_all_products()
    test_filter_products_by_category()
    test_update_product(pid)
    test_delete_product(pid)
