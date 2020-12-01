import React, { useEffect, useState } from 'react';
import { Box, Heading, Flex, Text, Icon, Button } from '@chakra-ui/core';
import { Link, NavLink } from 'react-router-dom';
import { list } from '../utils/eventService';
import { useAuthContext } from '../context/AuthProvider';

const Events = () => {
  const [events, setEvents] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { isLoggedIn, isAdmin } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await list();
      if (!data.success) {
        setError(error);
      } else {
        setEvents(data.data);
        setError(null);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <section>
      <Heading mb={2} as="h1" size="md">
        Events page
      </Heading>
      {isLoggedIn && isAdmin && (
        <Button as={NavLink} to="/events/create">
          Nytt event
        </Button>
      )}
      {error && <p>{error}</p>}
      <Flex>
        {loading && <div>Loading ... </div>}
        {events &&
          events.map((event) => (
            <Box p="6" as="article" key={event.id}>
              <Heading mb={2} as="h2" size="sm">
                {event.name}
              </Heading>
              <Text fontSize="lg" mb={2}>
                {event.description}
              </Text>
              <Text fontSize="lg" mb={2}>
                <Icon name="time" mr={2} />
                {new Date(event.createdAt).toDateString()}
              </Text>
              <Text fontSize="lg">By: {event?.user?.email}</Text>
              <Link to={`events/${event.id}`}>Se event</Link>
            </Box>
          ))}
      </Flex>
    </section>
  );
};

export default Events;
