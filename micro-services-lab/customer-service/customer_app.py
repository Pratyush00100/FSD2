from flask import Flask, jsonify
import requests
import os

app = Flask(__name__)

ORDER_SERVICE_URL = "https://two3bda70124-ex-11-order-service.onrender.com"

customers = {
    101: {"id": 101, "name": "Customer-1", "email": "customer-1@example.com"},
    102: {"id": 102, "name": "Customer-2", "email": "customer-2@example.com"}
}

@app.route("/")
def home():
    return jsonify({"service": "Customer Service Running"})

@app.route("/customers/<int:user_id>/orders")
def get_customer_orders(user_id):
    customer = customers.get(user_id)

    if not customer:
        return jsonify({"error": "Customer not found"}), 404

    try:
        response = requests.get(
            f"{ORDER_SERVICE_URL}/orders/user/{user_id}",
            timeout=5
        )

        if response.status_code == 200:
            orders = response.json()
        else:
            orders = []

    except requests.exceptions.RequestException:
        orders = []

    return jsonify({
        "customer": customer,
        "orders": orders
    })


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 5001))
    )