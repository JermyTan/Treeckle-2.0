import React, { useContext, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import { OwnEventsContext, OwnEventsProvider } from "../../context-providers";
import EventEditableGalleryItem from "../event-editable-gallery-item";
import EventGallery from "../event-gallery";

import PlaceholderWrapper from "../placeholder-wrapper";

const OwnEventGallery = () => {
  const { ownEvents, isLoading, getOwnEvents } = useContext(OwnEventsContext);

  useEffect(() => {
    getOwnEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PlaceholderWrapper
      isLoading={isLoading}
      loadingMessage="Retrieving own events"
      showDefaultMessage={ownEvents.length === 0}
      defaultMessage="You have not created any event"
      placeholder
    >
      <EventGallery events={ownEvents} GalleryItem={EventEditableGalleryItem} />
    </PlaceholderWrapper>
  );
};

function EventsOwnSection() {
  return (
    <OwnEventsProvider>
      <Segment raised>
        <OwnEventGallery />
      </Segment>
    </OwnEventsProvider>
  );
}

export default EventsOwnSection;
