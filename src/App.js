import { Container } from "react-bootstrap"; 
// just gives us spacing around the edges so if we expand on each side of the screen , you'll  notice we have some spacing on each side.
import { Stack } from "react-bootstrap"; 
import { Button } from "react-bootstrap"; 
function App() {
  return (
  <Container className="my-4">
   <Stack direction="horizontal" gap={2} className="mb-4">
   <h1 className="me-auto">Budgets</h1>
   <Button>Add Budget</Button>
   <Button>Add Expense</Button>
   </Stack>
  </Container>
  
  );
}

export default App;
