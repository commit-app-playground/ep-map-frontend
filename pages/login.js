import "../components/common"
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Container,
  Row,
  Col
} from 'reactstrap';

export default function Page() {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>Sign In</h2>
          <Form className="form">
            <FormGroup>
              <Label for="exampleEmail">Username</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="example@example.com"
              />
            </FormGroup>

            <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
