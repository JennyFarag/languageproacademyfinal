import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Modal, Button, Form } from 'react-bootstrap';
import '../styles/Calendar.css';

const practiceActivities = [
  "Listening to a Podcast",
  "Writing a Journal Entry",
  "Vocabulary Flashcards",
  "Grammar Exercises",
  "Reading a Short Story",
  "Watching a TV Show",
  "Cooking with a Recipe",
  "Language Learning App",
  "Cultural Activity",
  "Listening to Music"
];

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [practiceSessions, setPracticeSessions] = useState([]);
  const [form, setForm] = useState({
    title: '',
    notes: '',
    status: 'Not Started'
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const validateForm = () => {
      const { title, notes } = form;
      const isValid = title && notes && form.status;
      setIsFormValid(isValid);
    };
    validateForm();
  }, [form]);

  const onChange = date => {
    setDate(date);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleSave = () => {
    setPracticeSessions([...practiceSessions, { ...form, date }]);
    setShowModal(false);
    setShowConfirmModal(true);
    setForm({
      title: '',
      notes: '',
      status: 'Not Started'
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleDelete = (index) => {
    const updatedSessions = practiceSessions.filter((_, i) => i !== index);
    setPracticeSessions(updatedSessions);
  };

  const getRandomActivity = (date) => {
    if (date.getDay() === 0 || date.getDay() === 6) return ''; // No activities on weekends
    const index = (date.getDay() + date.getDate()) % practiceActivities.length;
    return practiceActivities[index];
  };

  const handleConfirmClose = () => setShowConfirmModal(false);

  const handleEdit = () => {
    setShowConfirmModal(false);
    setShowModal(true);
  };

  return (
    <div className="calendar-container">
      <h2>Schedule Your Practice</h2>
      <Calendar
        onChange={onChange}
        value={date}
      />
      <p>Selected date: {date.toDateString()}</p>
      <p>Suggested activity: {getRandomActivity(date)}</p>
      
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Schedule Practice Session</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                value={form.title}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formNotes">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter notes"
                name="notes"
                value={form.notes}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={form.status}
                onChange={handleInputChange}
              >
                <option>Not Started</option>
                <option>In Progress</option>
                <option>Completed</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave} disabled={!isFormValid}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Confirmation Modal */}
      <Modal show={showConfirmModal} onHide={handleConfirmClose}>
        <Modal.Header closeButton>
          <Modal.Title>Practice Session Confirmed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your practice session has been booked.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleConfirmClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Edit Information
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="history-section">
        <h3>Practice Session History</h3>
        <ul>
          {practiceSessions.map((session, index) => (
            <li key={index} className="session-card">
              <strong>{session.title}</strong><br />
              Date: {session.date.toDateString()}<br />
              Notes: {session.notes}<br />
              Status: {session.status}<br />
              <Button className="button-purple" onClick={() => handleDelete(index)}>Delete</Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomCalendar;
