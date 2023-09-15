import{n as a,P as p,j as t,a as r}from"./vendor-373470ad.js";import{d as e}from"./index-e389a3ba.js";const s=a.ul`
  width: 310px;
  display: block;
  margin: 0 auto;

  & > li + li {
    margin-top: 20px;

    @media ${e.tablet} {
      margin: 0;
    }
  }

  @media ${e.tablet} {
    width: 640px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    white-space: nowrap;
    gap: 20px;
    justify-items: center;
    align-items: stretch;
  }

  @media ${e.laptopM} {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${e.laptopL} {
    grid-template-columns: repeat(5, 1fr);
  }
`,d=({children:i})=>t.jsx(s,{children:t.jsx(r,{children:i})});d.propTypes={children:p.node.isRequired};export{d as M};
