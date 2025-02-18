import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { questions } from "../../questions";

const AccordionCard = () => {
  return (
    <div className="">
      <Accordion defaultExpanded className="p-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p component="span">How are my donations used?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            100% of your donation goes directly to the project you choose. We
            ensure full transparency by providing regular updates and reports on
            how your contribution is making a difference.
          </p>
        </AccordionDetails>
      </Accordion>
      {questions.map((question, index) => (
        <Accordion key={index} className="p-2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <p component="span">{question.question}</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>{question.answer}</p>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionCard;
