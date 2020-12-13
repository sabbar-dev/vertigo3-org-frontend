import css from "styled-jsx/css"

export default css`
  .tabs-col {
    margin-top: 12px;

    :global(.nav-tabs) {
      border-bottom: 0;
    }

    :global(.nav-tabs) {
      .nav-item a {
        color: #ffb001;
      }
    }
  }

  .tabs-col .nav-tabs .nav-item.show .nav-link,
  .tabs-col .nav-tabs .nav-link.active {
    color: #ffb001;
    background-color: #030200;
    border-color: #ffb001;
  }

  .tabs-col .nav-tabs .nav-link {
    border: 1px solid #ffb001;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 0.2rem 0.5rem;
    border-bottom: 0;
  }
`
