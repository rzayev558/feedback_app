import React, { useState } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import FeedbackList from "./FeedbackList";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { FaTimes, FaEdit } from "react-icons/fa";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>

      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple"></FaTimes>
      </button>

      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple"></FaEdit>
      </button>

      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = { item: PropTypes.object.isRequired };

export default FeedbackItem;
