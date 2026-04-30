CREATE DATABASE gamex_db;
USE gamex_db;

CREATE TABLE tournaments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date DATE,
    prize_pool VARCHAR(100),
    status ENUM('Upcoming', 'Live', 'Completed')
);

CREATE TABLE gear (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255),
    price DECIMAL(10, 2),
    image_url VARCHAR(255)
);
