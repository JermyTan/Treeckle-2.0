import React, { useCallback, useContext, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { VenuesContext } from "../../context-providers";
import { useDeleteVenue } from "../../custom-hooks/api";
import { ADMIN_VENUES_EDIT_PATH } from "../../routes";
import { VenueViewProps } from "../../types/venues";
import PopUpActionsWrapper from "../pop-up-actions-wrapper";
import VenueBookingForm from "../venue-booking-form";

type Props = VenueViewProps;

function VenueFormGalleryItem({ id, venueFormProps }: Props) {
  const history = useHistory();
  const { getAllVenues } = useContext(VenuesContext);

  const { deleteVenue, isLoading } = useDeleteVenue();

  const onDelete = useCallback(() => {
    deleteVenue(id, getAllVenues);
  }, [id, deleteVenue, getAllVenues]);

  const onEdit = useCallback(() => {
    history.push(ADMIN_VENUES_EDIT_PATH.replace(":id", `${id}`));
  }, [history, id]);

  const actionButtons = useMemo(
    () => [
      <Button key={0} content="Edit" onClick={onEdit} color="black" />,
      <Button
        key={1}
        content="Delete"
        onClick={onDelete}
        color="red"
        loading={isLoading}
      />,
    ],
    [isLoading, onDelete, onEdit],
  );

  return (
    <PopUpActionsWrapper
      actionButtons={actionButtons}
      offsetRatio={{ heightRatio: -2 }}
    >
      <div className="flex-display hover-bob hover-pointing">
        <VenueBookingForm venueFormProps={venueFormProps} readOnly />
      </div>
    </PopUpActionsWrapper>
  );
}

export default VenueFormGalleryItem;
