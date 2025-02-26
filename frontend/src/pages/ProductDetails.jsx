import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import axios from "axios";

const ProductDetails = () => {

	const { id: productId } = useParams();

	const [product, setProduct] = useState([]);

	useEffect(() => {
		const fetchProduct = async () => {
			const { data } = await axios.get(`/api/products/${productId}`);
			setProduct(data);
		};

		fetchProduct();
	}, []);

	return (
		<>
			<Link className="btn btn-light my-3" to="/">
				Go Back
			</Link>
			<Row>
				<Col md={5}>
					<Image src={product.image} alt={product.name} fluid />
				</Col>
				<Col md={4}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h3>{product.name}</h3>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating
								value={product.rating}
								text={`${product.numReviews} reviews`}
							/>
						</ListGroup.Item>
						<ListGroup.Item>Price: ${product.price}</ListGroup.Item>
					</ListGroup>
                    <Button className="btn-block ms-3 mt-2" type="button" disabled={product.countInStock === 0}>Add to Cart</Button>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<Row>
									<Col>Price: </Col>
									<Col>
										<strong>${product.price}</strong>
									</Col>
								</Row>
							</ListGroup.Item>
                            <ListGroup.Item>
								<Row>
									<Col>Status: </Col>
									<Col>
										<strong style={{ color: product.countInStock > 0 ? 'green' : 'red' }}>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong>
									</Col>
								</Row>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
                <p className="mt-3" style={{fontSize: '1.2rem'}}>{product.description}</p>
			</Row>
		</>
	);
};

export default ProductDetails;
