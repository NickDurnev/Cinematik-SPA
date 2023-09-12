import{n as g,u,d as h,a as f,W as x,j as e,m as b}from"./vendor-446e3497.js";import{a as j}from"./axios-d95ca511.js";import{e as s,u as l,p as v,T as k,N as i}from"./common-c2210d67.js";const w="https://nodejs-cinematik-rest-api.onrender.com/";async function y({queryKey:a}){const[r,{dbUserID:t}]=a;return(await j.get(`${w}users/${t}`)).data}const $="/dist/assets/welcomepage_wallpaper_desktop-24463469.jpg",I="/dist/assets/welcomepage_wallpaper_mobile-73fd3858.jpg",U=g.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.9) 100%
    ),
    url(${I});
  width: 100vw;
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media ${s.tablet} {
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.9) 100%
      ),
      url(${$});

    width: 100vw;
    min-height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  & > div {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
    & > div + div {
      margin-top: 40px;
    }
  }
  & h2 {
    font-family: 'Technovier';
    font-size: 30px;
    color: #ffffffd3;

    @media ${s.tablet} {
      font-size: 60px;
    }

    @media ${s.laptopM} {
      font-size: 70px;
    }

    @media ${s.laptopL} {
      font-size: 80px;
    }
  }
`,z=()=>{const[,a]=l("userID",null),[r,t]=l("userName",null),{dbUserID:d}=u(),{data:o,isError:c,isSuccess:n,isLoading:p,error:m}=h(["getUser",{dbUserID:d}],y,{refetchInterval:1e4});return f.useEffect(()=>{n&&(a(o.data.user._id),t(o.data.user.name),setTimeout(()=>{window.location.reload()},4e3)),c&&x.error(`Error: ${m.response.data.message}`)},[o,c,n]),e.jsx(e.Fragment,{children:e.jsx(b.div,{initial:"closed",animate:"open",exit:"exit",variants:v,children:e.jsxs(U,{children:[p&&e.jsx(k,{}),n&&r&&e.jsxs("div",{children:[e.jsx(i,{children:e.jsxs("h2",{children:["Welcome, ",r]})}),e.jsx(i,{delay:1,children:e.jsx("h2",{children:"You look lonely"})}),e.jsx(i,{delay:2,children:e.jsx("h2",{children:"Enjoy your cinema journey"})})]})]})})})},N=z;export{N as default};
