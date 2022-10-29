/* Replace with your SQL commands */
CREATE TABLE product_colors (
    id SERIAL PRIMARY KEY,
    product_id bigint REFERENCES products(id) NOT NULL,
    color_id bigint REFERENCES colors(id) NOT NULL
);
