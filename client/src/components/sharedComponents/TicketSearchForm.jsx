import {useState} from 'react';
import {Button, Form} from 'react-bootstrap';

const TicketSearchForm = ({onSubmit}) => {
    const [toTown, setToTown] = useState('');
    const [fromTown, setFromTown] = useState('');
    const [ticketType, setTicketType] = useState('economy');
    const [passengerCount, setPassengerCount] = useState(1);
    const [departureDate, setDepartureDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({toTown, fromTown, ticketType, passengerCount, departureDate});
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div className={'row mb-3'}>
                <Form.Group className={'col-md'} controlId="formToTown">
                    <Form.Label>To Town</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter destination town"
                        value={toTown}
                        onChange={(e) => setToTown(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className={'col-md'} controlId="formFromTown">
                    <Form.Label>From Town</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter origin town"
                        value={fromTown}
                        onChange={(e) => setFromTown(e.target.value)}
                    />
                </Form.Group>
            </div>

            <div className={'row mb-3'}>
                <Form.Group className={'col-md'} controlId="formTicketType">
                    <Form.Label>Ticket Type</Form.Label>
                    <Form.Select
                        value={ticketType}
                        onChange={(e) => setTicketType(e.target.value)}
                    >
                        <option value="economy">Economy</option>
                        <option value="business">Business</option>
                        <option value="firstClass">First Class</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className={'col-md'} controlId="passengerCount">
                    <Form.Label>Passenger Count</Form.Label>
                    <Form.Control
                        type="number"
                        value={passengerCount}
                        onChange={(e) => setPassengerCount(e.target.value)}
                    />
                </Form.Group>
            </div>

            <div className={'row mb-3'}>
                <Form.Group className={'col-md'} controlId="formDepartureDate">
                    <Form.Label>Departure Date</Form.Label>
                    <Form.Control
                        type="date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                    />
                </Form.Group>
            </div>

            <Button variant="primary" type="submit">
                Search
            </Button>
        </Form>
    );
};

export default TicketSearchForm;
