import{n as e}from"./vendor-373470ad.js";import{d as i}from"./index-e389a3ba.js";const n=e.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  font-family: 'Muller';
  font-size: 20px;
  line-height: 20px;
  text-transform: uppercase;
  width: 150px;
  height: 70px;
  padding: ${({padding:t})=>t};
  color: ${({theme:t})=>t.textColor};
  background-color: transparent;
  border: 1px solid ${({theme:t})=>t.textColor};
  border-radius: 10px;
  transition: all ${({theme:t})=>t.hoverTransition} ${({theme:t})=>t.hoverTimeFunction};

  &:hover,
  &:focus {
    background-color: #4847473c;
  }
`,r=e.div`
  width: 100%;
  margin-top: 60px;
  color: ${({theme:t})=>t.textColor};

  @media ${i.tablet} {
    width: 80vw;
    display: flex;
    align-items: start;
    justify-content: space-between;
  }

  @media ${i.laptopM} {
    width: 1200px;
  }

  @media ${i.laptopL} {
    width: 1370px;
  }
`,l=e.div`
  width: 310px;
  height: 465px;
  margin: 0 auto;
  background-color: ${({poster_path:t})=>!t&&"#666666"};
  color: ${({theme:t})=>t.linkColor};

  @media ${i.tablet} {
    width: 250px;
    height: 400px;
    margin: 0;
  }

  @media ${i.laptopM} {
    width: 400px;
    height: 600px;
  }

  & > img {
    width: 100%;
    height: 100%;
  }

  & svg {
    width: 150px;
    height: auto;
    stroke: currentColor;
  }
`,d=e.div`
  width: 100%;
  margin-top: 20px;

  & > h2 {
    margin-bottom: 30px;
    font-family: 'Technovier';
    font-size: 30px;
    line-height: 37px;

    @media ${i.laptop} {
      font-size: 40px;
      line-height: 47px;
    }
  }

  & > h3 {
    margin-bottom: 20px;
  }

  & h3 {
    font-size: 20px;
  }

  & > p {
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 50px;
  }

  @media ${i.tablet} {
    width: 380px;
  }

  @media ${i.laptop} {
    width: 640px;
  }

  @media ${i.laptopM} {
    width: 700px;
  }

  @media ${i.laptopL} {
    width: 850px;
  }
`,s=e.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 20px;
  padding-left: 5px;
  font-size: 18px;
  line-height: 18px;

  & > li:first-of-type {
    text-align: left;
    margin-right: 60px;

    @media ${i.laptop} {
      margin-right: 120px;
    }
  }

  & > li:last-child {
    text-align: right;
  }

  & > li > p + p {
    margin-top: 30px;
  }

  @media ${i.tablet} {
    margin-left: 0;
    width: 350px;
  }

  @media ${i.laptop} {
    width: 500px;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${i.laptopM} {
    width: 600px;
  }

  @media ${i.laptopL} {
    padding-left: 10px;
  }
`,x=e.ul`
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: ${({theme:t})=>t.linkColor};

  @media ${i.laptop} {
    justify-content: start;
  }

  & > li {
    padding: 15px 30px;
    font-family: sans-serif;
    text-transform: uppercase;
    text-align: center;
    position: relative;
    text-decoration: none;
    display: inline-block;
    background-image: linear-gradient(
      to right,
      ${t=>t.theme.linkColor},
      ${t=>t.theme.linkColor} 50%,
      #000 50%
    );
    background-size: 200% 100%;
    background-position: -100%;
    position: relative;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${t=>t.theme.linkColor};
    transition: all ${t=>t.theme.hoverTransition} ${t=>t.theme.hoverTimeFunction};
    &:before {
      content: '';
      background: ${t=>t.theme.linkColor};
      display: block;
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 0;
      height: 3px;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      background-position: 0;
    }
    &:hover::before {
      width: 100%;
      margin: 0;
    }
  }
`,m=e.div`
  margin-left: 0;
  margin-top: 50px;

  @media ${i.laptop} {
    width: 550px;
    margin-top: 110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`,h=e(n)`
  width: 220px;
  margin: 0 auto;
  margin-bottom: 30px;
  padding: 10px 20px;

  @media ${i.laptop} {
    margin-bottom: 0;
  }
`,g=e(n)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 290px;
  padding: 10px 30px;
  margin: 0 auto;
  color: ${({theme:t,disabled:o})=>o&&t.addBgElementColor};
  border: 1px solid
    ${({theme:t,disabled:o})=>o&&t.addBgElementColor};
  & > svg {
    stroke: currentColor;
    width: 20px;
    height: 20px;
  }
`;export{m as B,r as C,l as I,s as M,d as a,x as b,h as c,g as d};
