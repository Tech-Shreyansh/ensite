import React, { Component } from "react";

class Theme extends Component {
  render() {
    return (
      <div id="call" className="target">
        <div className="container">
          <h1 className="mb-3 green-heading">Call for Paper</h1>
          <p>
            IEEE AKGEC 2024 extends an invitation to researchers, practitioners,
            and students from across the globe to submit original papers that
            have not been previously published for potential presentation at the
            conference. All submitted papers will undergo peer review via the
            provided Paper Submission Link. The submission guidelines include a
            maximum limit of six pages, inclusive of figures and references.
            Furthermore, all submissions will undergo a plagiarism check and
            papers with similarity scores of 30% or higher may be subject to
            rejection without further review.
          </p>

          {/* <p>The focus area and tracks of the conference would be:</p>
          <p>
            <span className="bold-text">Track 1:</span> Green Energy, Electric
            Drives and Smart Grid
            <br />
            <span className="bold-text">Track 2:</span> Computing and Security
            <br />
            <span className="bold-text">Track 3:</span> Sustainable Technologies
            and Development
            <br />
            <span className="bold-text">Track 4:</span> Artificial Intelligence
            and Embedded Systems
          </p> */}
          <div>
            <p>
              Template for Paper Submission: &ensp;
              <a
                href="https://www.ieee.org/conferences/publishing/templates.html"
                target="_blank"
                rel="noreferrer"
                download
              >
                Template
              </a>
            </p>
            <p>
              To submit the paper click on the link: &ensp;
              <p className="red-heading">will be updated soon</p>
            </p>
            <i>
              Prospective authors are invited to submit a maximum of 6 pages
              full paper on the following tracks (but not limited to):
            </i>
            {/* <p>
              Guidelines for authors{" "}
              <span style={{ fontWeight: "normal" }}>
                (For complete details, refer:{" "}
                <a
                  style={{ fontStyle: "italic" }}
                  href="https://publishingsupport.iopscience.iop.org/author-guidelines-for-conference-proceedings/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Author guidelines for conference proceedings - IOPscience -
                  Publishing Support{" "}
                </a>
                ){" "}
              </span>
            </p> */}
          </div>
          {/* <div>
            <h3>Paper format (A Brief Idea)</h3>
            <ul>
              <li>The paper size is European A4.</li>
              <li>
                Margins are 4cm (top), 2.5cm (left and right) and 2.7cm
                (bottom).
              </li>
              <li>
                There are no page numbers, headers, or footers within the paper.
              </li>
              <li>Text is single-spaced, not double-spaced.</li>
              <li>All fonts are embedded.</li>
              <li>
                All pages are portrait (landscape pages should be rotated).
              </li>
              <li>
                The abstract text should be indented 25mm from the left margin
                and there should be 10mm space after the abstract before you
                begin the main text of your article.
              </li>
            </ul>
            <h3>Paper content</h3>
            <ul>
              <li>
                The paper includes the author's name(s) and affiliation(s) (full
                address including country).
              </li>
              <li>All articles must contain an abstract.</li>
              <li>
                All figures and tables should be numbered in numerical order.
                Please ensure that figure/table numbers are not duplicated or
                missed.
              </li>
              <li>
                Figures are legible and placed within the text, not collected at
                the end of the document.
              </li>
              <li>
                If section headings are numbered, ensure that they are numbered
                numerically, and no numbers are duplicated or missing.
              </li>
              <li>
                Displayed equations should follow a naming convention in
                numerical order, i.e. (1), (2), (3) etc or by section, i.e.
                (1.1), (1.2) etc.{" "}
              </li>
              <li>
                Reference lists are checked for accuracy. References can only be
                linked via CrossRef if they are correct and complete. Check
                templates and guidance page for reference.
              </li>
              <li>
                Ensure that references are numbered numerically, every reference
                has its own number and no numbers are duplicated or missing.
              </li>
              <li>
                Ensure that all references are cited in the text and that all
                citations have a corresponding reference.
              </li>
              <li>
                Finally, ensure that the paper is thoroughly proofread to check
                the standard of English and wording is clear and concise.
              </li>
            </ul>
            <h3>Conversion to PDF</h3>
            <ul>
              <li>The PDF file is editable and not password-protected.</li>
              <li>
                The PDF is free of formatting errors (e.g. corrupt equations,
                missing or poor-resolution figures) since conversion from Word
                to PDF can introduce formatting errors.
              </li>
              <li>There are no blank pages.</li>
            </ul>
            <h3>Review and Publication</h3>
            <p>
              All the submitted papers will undergo a review process by the
              International Review Committee of AKGEC 2024. All the
              accepted,registered and presented manuscripts shall be published
              in the proceedings of{" "}
              <b>
                the Journal of Physics, indexed in SCOPUS. The papers in the
                correct format will only be considered for review and
                publication.
              </b>
            </p>
            <p>
              <b>
                It is requested to circulate this call for papers to your
                research circle and academic community who may be benefited.
              </b>
            </p>
            <h3>Mode of presentation </h3>
            <p>
              The conference will be organized in Hybrid mode. The Authors may
              request, in advance, the organizers for presenting the papers in
              online mode.{" "}
            </p>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Theme;
