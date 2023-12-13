import { Card, CardBody, CardTitle } from "react-bootstrap";
import { moneyFormatter } from "../utils";

export default function budgetCard({name,amount,max}) {
  return (
    <Card>
        <CardBody>
            <CardTitle>
               <div>{name}</div>
               <div>{moneyFormatter.format(amount)} / {moneyFormatter.format(max)}</div> 
            </CardTitle>
        </CardBody>
    </Card>
  );
}
