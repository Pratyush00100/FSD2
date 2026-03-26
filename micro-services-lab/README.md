# Experiment-11: Microservice-based Backend Module

## Overview
This project contains two backend microservices built with Python and Flask. They communicate with each other to serve customer and order data. Data is stored in-memory for demonstration purposes.

* **Customer Service:** Fetches customer details and communicates with the Order Service to retrieve associated orders.
* **Order Service:** Manages order data and allows updating the status of specific orders.

## Live Demo Links (Render)
* **Customer Service:** https://customer-service-b9wi.onrender.com/
* **Order Service:** https://order-service-v5dl.onrender.com

## API Endpoints

### Customer Service
* `GET /` : Health check to verify service is running.
* `GET /customers/<user_id>/orders` : Fetch customer details and their associated orders.

### Order Service
* `GET /` : Health check to verify service is running.
* `GET /orders/user/<user_id>` : Fetch all orders for a specific user ID.
* `PUT /orders/<order_id>/status` : Update the status of an existing order.

## Local Setup Instructions
1. Clone the repository to your local machine.
2. Navigate into the `customer-service` and `order_service` folders in separate terminal windows.
3. For each service, create a virtual environment and activate it.
4. Run `pip install -r requirements.txt` in both environments.
5. Start the services by running `python customer_app.py` (Port 5001) and `python order_app.py` (Port 5002).