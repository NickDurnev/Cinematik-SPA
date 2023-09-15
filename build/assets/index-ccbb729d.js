import{n as g,F as u,z as h,r as f,W as x,j as e,m as b}from"./vendor-373470ad.js";import{a as j}from"./index-e2daedf6.js";import{d as s,u as c,T as v}from"./index-31646e86.js";import{p as y}from"./animations-5f4924b3.js";import{N as n}from"./Notify-f3b59ba3.js";const w="https://nodejs-cinematik-rest-api.onrender.com/",k=async a=>{const[,{dbUserID:r}]=a.queryKey;return(await j.get(`${w}users/${r}`)).data},$="/assets/welcomepage_wallpaper_desktop-24463469.jpg",z="/assets/welcomepage_wallpaper_mobile-73fd3858.jpg",I=g.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.9) 100%
    ),
    url(${z});
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
`,U=()=>{const[,a]=c("userID",null),[r,i]=c("userName",null),{dbUserID:l}=u(),{data:o,isError:d,isSuccess:t,isLoading:p,error:m}=h(["getUser",{dbUserID:l}],k,{refetchInterval:1e4});return f.useEffect(()=>{t&&(a(o.data.user._id),i(o.data.user.name),setTimeout(()=>{window.location.reload()},4e3)),d&&x.error(`Error: ${m.response.data.message}`)},[o,d,t]),e.jsx(e.Fragment,{children:e.jsx(b.div,{initial:"closed",animate:"open",exit:"exit",variants:y,children:e.jsxs(I,{children:[p&&e.jsx(v,{}),t&&r&&e.jsxs("div",{children:[e.jsx(n,{children:e.jsxs("h2",{children:["Welcome, ",r]})}),e.jsx(n,{delay:1,children:e.jsx("h2",{children:"You look lonely"})}),e.jsx(n,{delay:2,children:e.jsx("h2",{children:"Enjoy your cinema journey"})})]})]})})})},T=U;export{T as default};
