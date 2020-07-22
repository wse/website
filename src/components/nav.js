import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;

  :hover {
    .internal-container {
      display: block;
    }
  }

  img {
    box-sizing: content-box;
    width: 16px;
    padding: 0 8px;
  }
`
const InternalContainer = styled.div`
  width: 100%;

  @media (max-width: 650px) {
    z-index: 1;
    display: none;
    background: white;
    position: fixed;
    max-width: 700px;
    bottom: 64px;
    border-radius: 0px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  }
`

const Links = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const StyledLink = styled(Link)`
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  padding: 24px 12px;
  flex-grow: 1;
  text-align: center;
  transition: all 200ms;
  display: flex;
  justify-content: center;

  :hover {
    background: #f7f7f7;
  }
`

const StyledAnchor = styled.a`
  font-weight: bold;
  text-transform: uppercase;
  flex-grow: 1;
  text-align: center;
  transition: all 200ms;
  display: flex;
  justify-content: center;
  background: black;
  color: white;
  padding: 12px;
  font-size: 12px;

  img {
    width: 12px;
  }

  :hover {
    background: black;
    opacity: 90%;
  }
`

const MeContainer = styled.div`
  font-size: 20px;
  letter-spacing: 8px;
  text-transform: uppercase;
  padding: 72px 0;
  border-bottom: 1px solid;
  width: 100%;
  text-align: center;
  background: white;
  span {
    display: none;
  }

  @media (max-width: 650px) {
    font-size: 16px;
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    z-index: 1;
    border-bottom: none;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    span {
      display: block;
    }
  }
`

const Nav = () => (
  <NavContainer>
    <MeContainer>
      <span>&#9776;</span>
      <Link to="/">Nishant Dania</Link>
    </MeContainer>
    <InternalContainer className="internal-container">
      <Links>
        <StyledLink to="/blog">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAADaUlEQVR4nO2cT04UQRjFfxBwZdRESIiAK2/gKVyoQ7yAB9DExAuoG//cBjB6CNEDqLjB6EYjAjt1cNFDAgNMV/dUTb2afr/kW3V18VW9qup+NU2BMcYYk597wE/gsGOxA9yK0H8AzMSqCPgOLEWsryR2gOsxKoopyGHEukokSl/OxqjExGMuYd0xZ58iSVYEzxAxLIgYFkQMCyKGBRHDgohhQcTIKchj4Df596KG4wsR96ZyMtywUSwBf8+4RyW+Rm5vMDlniJfLxDQdMY+AX2fclztCl6wkMyTlbm/X9rK82zuNWBAxLIgYXfIhU+MvQinBh4T4i1DsQ0wz1H1I7CXLPkQM+5AuYEHEsCBiWBAxLIgYFkQMCyJGiCChxqvtfaPiAPgAPAUWWrTviEXg2aCug0i5tW3v2Ex6v+m82AV6LfJfQ+tjirHJ3YDj8Y9moqwN7smd99QKcki1/xWyfC2iNTOCBJlteoMAV4AHAeUeApcS5xKDE/1f6lvWnYAyt5NnkYAZTs+K4V1LxVmzT/3o3wcuTiCXpozs31JnSMggURxItZQqyOeAMtvJs0hAqYJsBpTZSJ5FAkp8huwCN6hOjRjFAtVMupw8o2ZM1TOkD9ynXgyAH4Oy/YT5JKHOh+Q2UscN4d0W7euh9VH3MKeuKwuyB2wBT4CrZ+QWygLVBuV7qtdhCzIiNoBrI7tzMixTvSx0XpDlwA6bBCtkFmSO6f9+Sp3G/Z96xGyiMUtWgNdMfoacIESd2kpMI0b2eWk+ZOqxIGJYEDEsiBgWRAwLIoYFEcOCiGFBxLAgYlgQMVII8gZYHcTbDl5PTtPdzJVj96528PpYu71esgqk6QgYntJdu+7fQwrDv4eUhAURw4KIMQlBcvuC4n3HMON+ZZHbF+T2HfYh0864IyK3L8jtO+xDxLEPKQkLIoYFESOnIEcPyxmxkPEb5zHuW0WIP1Ejht+wD+kKqUbK0ZKlRiy/kcyHqJ4ZUiJ71PzffMiS9S1OLoaAvgwRZCtCIqbiXV2BEEHWIyRiKqKcvzIPfCLdQ64rsQ1caNj357Im0KCSo0/YKXiNeCXQsFLjeYv+rmUWeCnQuJKiD7wgsQHv4WdKSHykxelFbY/VmB/8sR5wk2pfquvm8QDYoTpxaH0Qf7JmZIwxplP8Bx6gnS8mOXLNAAAAAElFTkSuQmCC" />
          Blog
        </StyledLink>
        <StyledLink to="/bookshelf">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAEa0lEQVR4nO2dy6scRRSHvzEYXSi+ggtzI/hA8YG6EgTNdePiJiF/gBvFhbpSEdy5U1AEIVtduFBXLlyIV91ERiKKL0QEyULQZIIBHxGjSEDjuOgZ7nRN9et0dfe5c38f9Ka7zqkz59dd1VVd3QNCCCGEEMIXB4AJMK25TYCNDv3seJokcb6d7NDPSjBqYTtNVGcqPyvBBUMHIPJIEGdIEGdIEGdIEGekEuQ9YI3szmdx2we8P4CfHcniuGCtpNy+oGxXflYCNVn12QVcB1w0dCBFLJ6t86YmZN7U1L1C2vhJzcXAfuBZ4APg7Kze08CtPdTfmKbTHXUEaeOn7ZzYZTMfLwAfA+dKbN+olaGe8SaIdU7sXuAz4HwDu58a5Kk3vAli9XPaaHdT/VTVR506XGm0W08axQwJAl8a7SRIR4yNdhKkIz4y2q0BN6QMBCQIwCfAPwXHzpHdAr9KdicW0slVYmXou6MqP5vA3oXja2QDz5ifT4N954EnyY/KRywPTl8vTk//eBekaMQf8/NisO/Dgt/8RFDuREE5M2qyMsJ+JJaXEfBAsO9asvktF3i/QsJ5sdh82NzPpWT9yHzff8DTwCVkA8CHCmynwMPlaeoP74I09fO50f616lTVR03WFtbb3/WUQUiQLayCXE/WlyRBgmxxjOx218L+VEFIkC3+AL4x2iZrtiRIHmuzdX+qACRIHqsgN5KfFTAjQfIcIxuDWEjSj0iQPGeAb422SfoRCbLMoP2IBFnGKsjNwDVtK5cgy4yx9yP3ta1cgixzBvjOaNu6H5EgcQab15IgcayC3AJc3aZiCRJnTHyKv4oRLccjEiTOL8Bxo22rZkuCFDNIPyJBihlXHJ8Cv0f23w7ssVYqQYopukLeBQ4CV5GtC74b+G3h+IgE4xELi8+VwzVQc2JrofrwMyVLXLguazNSrozjQdmviJ/ELwXljlT47YTFADy8Yxgmusm6rCJeCcoWLWgIy31d4bcQNVnlhM3WBvlxxhXAU8AjQbk7Zsd6ZfGM8PCOYXjmb7K8LqtoKWkReyPlfwbeInuNoeytq8MVvpPTdh2UVz8h3xv9vlzD9xJqsqoZG+3WLUYSpBrrAPEu4PKmRhKkGqsgu4A7mxpJkGpOAj8Y7P7F8LqCBKlHk6vkb7L3Sw4DP3YSTQHePoLZ5cc0Hyzx8SvwDvAMcA9wYU2fydkg+0FNfnzs867e/MTYDbw9szsBvAk8DtzGin6Mc7uwe+gAhAMOAKewj3y11dsms1zniLV/E8pnXUU6JgQv+8QEmfYTi5iR00DjEGdIEGdIEGdIEGdIEGfEBDnVexQ7l0m4IybIo7GCIjkT4LGhgxBCCLE6WB6u1J3rWvUHN53kQeMQZ0gQZ0gQZ0gQZ0gQZ0gQZ0gQZ0gQZ0gQZ0gQZ1gE+atGmbMGv9uNTvJgEeSLGmWs/+u0nXCTh0NUL5M82EcgA+MqD8+XBPFcX0E4wFUeDgFHgT9n21F2xpURojwIIYQQQrjnf/tnfWuE5ENaAAAAAElFTkSuQmCC" />
          Bookshelf
        </StyledLink>
        <StyledLink to="/mixtape">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAD2ElEQVRoge3YT2hcVRQG8N+UVCOm1tpYta2o4KboRlERXYggIggqaq1IMbqQFhopiNXuRBApRRDFlSIUXalbV1qobeK/hX9AUAR1YZpURFtFTBqTJi7ue52XyXtv7pt5k0TJB5eZN/fcc7/vnXvvOXNZxSp6gkbN/q7B7bg2aZfhQgxgBl/gNbxX87y1YCsO4EfMR7ZXl4VpAS7Bm/hHk+DPeB27cRuuwgasxSB24rfE9oGlp7wYQzgpEJrCG7gucuzOZNzR3lCLQx9e0YzAO9hc0cdgMvaveqnFYw3eTkj8je0VxjawCTfhucTHRN0EY/FyQuAUbmxje4ewf77Crzhj8Ybf2zOmJbhPcz/c2sZ2r/yT6nd8jUO4s1dEy7BBeKvzGI6wP5HYPo+bcamwt4qwEffgJRzGT8JBMpt8fobH1ZDz0iU1EulsIrF/VHgJhKR4EbYJCXMYb+E7zInLPS90I2KTsLHncUvkmKcjiaVtEkeECN6Fq4UXsAbrhWjMCBG6olMhKan3K4xpYJdQjkxqHhAnhQgcEfLOLlwvJMt2OJT42V+BxwJ8bmVk4YcTHu92MvhKYf3+ifPq49QRbhCEfBlj/LFqa3sltJGUfPYUmo9RuwLRIJwMeR0N4fwmJK9GThvqAamhgrn6k/7ZzG+FSMOVYix53lZg3yeEtq5lckxx4lyb2MyW8C3smEme1xU4X0r0CVzOZH6LFpJm3JE84yVGehDNZX5bwDdvj6RoaIpZbqQCouqt1ojkhW6zkO2PCn9rT2NcWN/P4vIuyNbBr63hOUItlP1/ntemcBDnRpIbEArIw8ILmcZxfCiUMBfUKWS9ZqkS2z7BxW1E7MAvbfxM4MG6hIxWFJEVUxSZ/eLL9zk8VYeQbtqBnHl2VBCR15ZFyJRwgZdiQPvl1JGQsuO3DvTjkczzY8LFXu3oVMgp4TZxDE/ijxLbuzPf763BX1tUWVpjLWPHSmzHM3bjNfgr4ltJSLpJN7aMHWzpz7bTGbvpGvxVFjIhX0zVN3g8Y9dtRLK+ojf79yV967BHKFN24/wS2x8y378tsBmI9PdNyTxn0RqRfYrfcpX2TMbncJe+nijhW9ixRcgD3Uw8qb48Mp6MryyEcLvXjZAXc+Z5SPXMPmfxlVQlIf06v10ZFarmPFSttfZF8i3tGMSnHYhoV/1u17zwLmoncH/B+MpCCFXsQe33zKSwnIoi0Yr0tPpA8//IRPK8R/lp2JGQFFuFZXEsmXA6IfCRcDptiRRQB7oSspKwgG+vq98lQ96F2H8pKmeRjcjosrHoHCvhzm0V/2/8C1AMyw8KHhUnAAAAAElFTkSuQmCC" />
          Mixtape
        </StyledLink>
        <StyledLink to="/movies">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAxklEQVRoge2ZwQ0CIRBF3xovtmE/WpM9WcJqGdrGHvEixhhiNIJ8Jv8lm5A5sDwYWBbAGPMJZyAN+swA010k1eyVDkzr18BTORViavHHAKwIQhiRMHMkzIhYRA2LqGERNSyiRiuRPXBtVPdbav8jAGyAA7A0qL/0vmYimS1wjCCS2QGXCCLQLt3+LpKpnW5xlt+MU+sLkeEn+/DLb4gPYss0Kor4FEUNi6hhETUsooZF1PDVmxphRMJtGk9dm/Ebc+8GGDMCN1Ze8rYjfSCSAAAAAElFTkSuQmCC" />
          Movies
        </StyledLink>
        <StyledLink to="/">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAGSElEQVR4nO2cW2wVRRjHf/ZAy8XCg0KoFpRIlICYKCkoYhQBLykVo4k3NAoWb29oTCCGF+MtxiiKRKKJPpAQY6KASBsi8YJRvFBADLal1BsmKveqFSzQ+vDNqaft7nR2Z3b3JJ1f8qXJduc//5lu98x+8+0Bj8fj8Xg8Ho/H4/F4PB6Px+MZ0JyRgOalwLXALOB8YBRwNtAGHAa+B7YDG4FdCfTfn7caYCowCTgLGAkcAg4CPwEfAR8DO1P2ZkQZsAj4FuiKEI1ALVCaoLdSYDHQFNHbLuA+Nbai4BpgH9EG0Tt+AOYm4O06pW3jrQW4OgFvxuSAFUAndgPJRyfwCjDIgbdBwErH3l5SY06VocA6C+O62KT04zIMqE/I27vAEAtvkcgBdQkNJB/vE+/KHgR8kLC3jUBJDG+Rec7ATAOwDKgCKoDB6uc0dbzBQOPFgj6vBN5APtDaVTQBrwMzCs5bkZK3Z2LNXATmor/vNQLzDLVq0K8EOoGFmN0G6tS5aXqbbagVmRywW9P5JmBERM0zgfc0mq4iCW97cPPB3YfFmk7XEf++VQKs12jbRpLeFsXU1fJNSGeNyF/fhnKgOUTfJpL29pWldh8mhXTUBVQ76mO+po+4kYa3KXEEhwGrgGMa4cLYbmW/Lzs0fR0HlgBjkFXCo+pYMXgrjKPAq/TzLLDaUCwfyxwP5glNX0sCzn+sSLwFxeowoRLgn4hiVY4HM13T15iA8yuKxFtQtBPyIRxnoiscD+ackH5OaNqcyNhb5ImG6LcO1+nN0pB+TmnanMrYW1i8phMbimS9jhqKpXXVtGna/Jmxt95xBMlCxkqMtYSITrPz3oew+2CLpk1rxt6+M2ls+sS0N+T4HMP2poQl/5s1bcJ+l5Y3oy0v04neFnL8VsP2ptwScvwLTZusvTnd95xC+D2pxlEfuqevyzTtpmXsbbKjPrr5MqSjJiQfYEM5cnsK0m80aB+Wi0ja2+eW2oHUhnTWhWS4bDJkGzTaDxloPJKRt4UxdbWUIjnYsE43EP3qKUe2rcI0WzHb7h8C/Jiyt93I7kwiXIV+F6MZuMlQaz761GgncGMEb/M0Wq69nabnFloimOzL7UCSMNORhX6p+nm5Or7TQOPlGN5WpeTthRjeIlMCvGNgxia2EO8RejDJlRrk421S2gUHuW8mNaB6YLiFt+HA5oS81ZFBiVgOeAp31UD524WLD5hSJPnuytdp4EkyqFQq5AZkrWszkFaiffCZUo197d0epIavKMgBd6Nf/gVFI7JOTvLfsQx4mOgXwx5gAY7ux0nUR1+IXEmzgYuA0UhNRRtSh9yE5C42I1VBaTIV+Q+8ApiI1G2PVN4OIku6LUgdiC5j6PF4PB6Px+MxYhbwFrK0yhectwJrgdvo+WSWU8fWqnPy57cAb5LxCz7FSgVmuZNmJD05g/Bdj8LYRHCF04BkLOElA0FxUoXp+fuAytRG4wjXhdeV2L+jaBItSM7ZJfc71utmHFLB5CoXW4YUcic9yfnYhrsysRxS2jzOkV4P1iCGXYmb7Ia4jpWOvI9Xemsc6XVTAfyrxO9xoHcn6U9yPlz4X6i0OoBzHeh1s5z/jdZZal0M/E02k9wF/IW8KmJD4Q7OckutHmylp9nrY+pUEm2FkVS0EP9KrO6ltTWmTiAHeon/ApwXUSOtFYZp7CX6ZI8Hfu2lcyCihpYO+hr9Hal/MGEO8sfJenJ7x8/Il7iYcDPwR4BGh2F7Iw5rzDYAjwMzkW+bKUPe7poA3IvsWGQ9of3Fh8rrBOW9TI1lphqbrtbjkMW89uGzIpiMYo1PTCbQ9OGj3vC8gYjTuRmNbGBmffUUWxxDbjFOeaAIBlZsUWs1oxqez3hgHcCDSC1I0EoozXjWci77ZQHmr8e5jO1IXUaeKszfz3YZR4C7LOYvEpXILobupXeXE3w7wXVvOeAOzL6exzaOqzE7zW2YMgpYilQeRUnG6+IUMnFPE+0rGi5RbRoIf5s2apxE3lNZilQ1xcZlSVg5sk83GbhAxVjkDdLhSFlYDlm9dCLJnd+QUqz9yFdpNgFfI2/D2jACeVtrIpJAGotcFBXKZwlSCnZa9dWOXLH7kVxMK1J796ny6fF4PB6Px+PxeDwej8fj8Xg8Hjv+A5ekosBuDv3UAAAAAElFTkSuQmCC" />
          About Me
        </StyledLink>
      </Links>

      <Links>
        <StyledAnchor target="_blank" href="https://twitter.com/nishantdania">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAD3ElEQVRoge2ZS2gdVRjHf19S2kZM1VqqLVqrBaUJoqW4srpQS3HhwgfqQiHSlVgqCFYXFUHURXUj1oWgoKsaVMSFWiTtwkd91SIUSwo+EG2NFkNIWtM2TX4u5iYO986d3MdMIpgfXJh7zrnn+//vecycb2CBBRb4XxDzLUBdB6wDVgCjwG/A4YiYnFdhjaB2q0+pR83mT/XVism8fi5Vb8yquLY09f/GuFP9o46Bak6rz6qdVX2sVXer4+qG6gCr1FPq/SWa2KFONWgizXvqJvVJ9TN1slL+dlaQxyqVZ9TNJZh4sAUDeRxXV2YF+jDV6LR6T4Em1qh/F2jihNpb6ft8dUtHKl5P6noJ0K9uL8jLM0BXQX19BzwC3KTuAYZI777qSB33b6kXtBpVXVYZ4aKYrPr+eHXAoZwf/6Te0qKRews0Uc2u6TjpqfVzjp4rgX3qO+raJr30Ntm+EQR2RsSO6YK0kc8b6OBuYFB9zcpia4BVTQhshHPAXRHxXGatekOTwzqlfqw+pC6vF1V9uci5pI5mxVk0fRER36j7gUbXQgCbK58J9VPgAPA1cAg4HhECvzbYX6NM1RMzg9oDHKSYrfIs8DvJfF5bQH/THIuIy6oLOwDUAIiII8BW6rhuksXAFRRrApIn5BqmF3uneljdBgwADwDjBQsoil+yCmemlnqC5EwAybxeDFxSvq6meSUitlUXprffb1PXl/PfNAFwJKswbeSjORLSLgeyCtNT60KS+bdsrhS1wCiwPOsYPDMiETECPD+Xqlpgb72zfEfV9xeB/eXraZl361XUZFHUbpL1Unuon1/GgNURcTKrsnpEiIgx4FbgJYq5MRbFm/VMzIraq76hDhf84NcsU+o1eVoXZRWqG4E+YBj4C/iK5OGwM6v9HNAfEUfzGmRmGtUukrv7xWWoapIJoCcifshrVLNGACJiHHi6DFUtsHs2E5CT+zXJ7n0AbClSVZP8CFwXEadma5g5IgCVG899wBcFCmuGSWBrIyYaQu1SX7e1VGc7PFGIgQxDm9T31Yk5MNFv5bBXGiYJt9vVXdYmy4pgr7qkVBMVIx3qo+rJEkwMmGz9pRu4Q/2yBAOaPEGUNxLqavVhdbAkAxMWsLBDvZ4kZTMGdAMXkaRIN5LkuNa3GySH74G+iDjYdk/qSpPXWGdL+sezGFF3qkvb/y9qDV2t7jF5Y1WmgRfU8p/h1BXqdvVQQeLPqZ+ofep5ZenOvemo64HbgJuBDcBVs/2GJEEwSPJmaQDYFxHD7UvNp6m7p8kev4bkVUE3sBQ4Q7JRjAJDEXGsaJELLDCP/ANy4Cd5pzcP8AAAAABJRU5ErkJggg==" />
          Twitter
        </StyledAnchor>
        <StyledAnchor
          target="_blank"
          href="https://www.instagram.com/nishantdania/"
        >
          <img src="data:image/png;base64,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" />
          Instagram
        </StyledAnchor>
        <StyledAnchor
          target="_blank"
          href="https://www.linkedin.com/in/nishantdania/"
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAEY0lEQVR4nO2dz2sdVRTHP+dhqVL8URfVqihUF4K0UCsUY0DoTlFqhBihuAhW/QPs3qXgojsXLhRcKMWEioUILgpKFw1GbVwVrT+hpuiirZg0Ucv7uphpeDR5Se7clzl15nwgiw733HPv/XTenfve3BnjOiR1gIPAKLAfuAe4+fpywYZYAuaAaWACOGFm3d4C1vsPSXuBd4G9dbWwZXwDvGxms9cOLAuQ9AxwDNjm0LA2sQCMmdkUlALK//mniMGviwVg2MxmrfzMnwEedW5U25gF9pmkEeC4d2taykgHeMG7FS1m1CT9COzybklL+ckkLRLX+V4smSR5t6LNdLwb0HZCgDMhwJkQ4EwIcCYEOJMroAt8DByiWMxtK/92lceOl2WCPuSsA74HXjSzM2sVkrQH+BB4pGKeRlNVwFngCTO7tJHCkm4FPie+cV1BFQFXgT1mdjYlSNIDFOJuSczXaKrMAR+kDj6Amf0KvFMhX6OpImAiI99kRmwjqSLg64x8yWdO06ki4GJGvisZsY2kioDtGfnuzohtJFUE7MvIN5wR20iqCDiUke+ljNhGUmUd0KVYhE2nBEl6GphKzNV4qq6ELwBPmtm5jRSWtBv4grz5o5FU/TJuJzAjaVzSTf0KSdoi6TXgNDH4qzKIH+V/Bj6huAP4QnlsJzAEPAfcn1l/o4m7IpyJH2ScCQHOhABnQoAzfS8h+2Fmtn6p/qRO+puc7zzwGcX+iO+AX4A/gXlgK3AfxR65x4Hn2Yxf9JRIA/JdlXRM0lCFuoYknUrtw5r9Sw4Y/IDUmW9axXasnPo6ko6oEJmN94DUme9tSVty6+upd0TSP6n9WdE/xwGpM99bufX0qXs8tT8r+uc0IHXmm5SUNZGvU//7qX3qJfmriP/hVdAdZnY5p4516t8O/ADcWSW+8euAzRz8sv5LwJuV45t+BtSBijv/zgO3pcY2/gyoAzP7C/ioSmwIGByVbliLj6ABIWkrcJnELb+tOgMk7Zb0nqRzkq5IOinpwCDqNrO/gS+rNCqJ3IbWna8n7+uS/l0lRVfSGwPKcTS5f3UPSN35ypyvbiDV4QHkeSW1f42fAyTtoNjNc/s6RS8CD21000mfXAeAkykxbZgDxlh/8KFYyebc9Qfwe2pAGwQ8m1D2qcxcf6QGtEHAgwllH87MtZga0AYBd21S2dVYSg1owyR8Q+drwxlwQxMCnAkBzoQAZ0KAMyHAmRDgTAhwJgQ4EwKcCQHOhABnQoAzIcCZEOBMCHAmBDgTApwJAc6EAGdCgDMhwJkQ4Ew8sMmZOAOcCQHOhABnQoAzIcCZEOBMhwr3tAcDY7EDzHm3osXMdSgeORz4cLpD3kt5gjwmTcXTpGbIezNGkM4Z4LGOmQk4DCw4N6hNzAPjZtbtAJjZLMWG5pCw+cwDY2b2LfSsA8xsiuIlOznvCQvW5itg2Mw+vXZgxZbMck44CIwC+4F7SXwGTrDMEvAbxZXmBHCi/Mhf5j8w/CtrPgki5gAAAABJRU5ErkJggg==" />
          LinkedIn
        </StyledAnchor>
        <StyledAnchor target="_blank" href="mailto:nishantdania@gmail.com">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAADa0lEQVR4nO3cP2hVZxzG8eeoTRWXprRCI6LYQFoKBZfiooFSEAdHFwkZpbo4drVQSqFTKKV1tXRxVbAqtIFODhKCCg6SRbCUWIRCUank2+HkQpR7c/6+53fP7fMZw7nnfd734fy9l0hmZmZmZvZ/k6UeACD1GCllWZZ0jXak3LkVcwHBXEAwFxDMBQRzAcFcQLBd0QFS32cXiX5O8REQzAUEcwHBXEAwFxAsWQHAHHA91f67AvwGfBydozTgLeAb4AUljEHeMv4FLgHvROcdCdgBLAJ/lpxUnwoY+Au4AOyMzv0K4BPgdsXJ9LGAgRXgeHR2AfuBy8BGzYn0tYCBq8ChiNBT5Ifi3w0n0PcCAP4BLgJ7ugp8ClhrITgwEQUMPAIWUwadA663GBiYqAIGfqXN21Zgmgq3lVW1FrT+/FJo77YVWK8Z4hnwVdFGLaxh0/kV+Rp4XnMN1rsIOMxV4HCZzzcOmHh+m9scIL/bqyx5wNc8AE5WnWCkKvmAT4G7VRYkecBNT4EvgKkmE4xQNR+wCzgLPCmzMMkDAneAd9uaYNfq5gP2bc49vADIz/kH25xgV+rkA2YoeU1IHnCLwRPhVJXPNw7YUJV85C8cz1LhDUDygEOsAkfrTDBC2XzAEWq8cEwecIQN8kP07eQB089vL/mD6Ms6C1E0fuFvchou0h+S3ts2wPj/LuixpJm6+y+aX+oCCvWggEaK5ucv5YO5gGAuIFh4AcBC4NhnosYeCC9A0k/AMvBhVwMC7wO/SPq5qzFHGYcCJGle0urm/fabqQYB3gAuSFqVdCLVOFWE34YO8VDS+SzLbrW5U+CYpB8kfdTmfov08TZ0VtJN4ArbvGUti/wr1SVJy+p48csYxyNgq6eSvpT0XZZlG1U/DJyW9L2kxkXWNfZPwiX9LulclmX3y2wMzCo/3XyWNFUJfTwFDXNM0gqwBOwdtRGwG7go6Z7GYPHL6MsRsNWa8ov0ja1/BOYl/Sjpg5BUI0zKKWiYa5I+l/RS0reSFtTBf3+papILkPKLtCRNh6bYxqQXMPYm5SI8sVxAMBcQzAUEcwHBXEAwFxDMBQRzAcFcQDAXEMwFBHMBwVxAMBcQzAUEcwHBXEAwFxDMBQRzAcFcQDAXEMwFBHMBwVxAMBdgZmZmZmZmZmbWkf8AULvpYZhpsSEAAAAASUVORK5CYII=" />
          Email
        </StyledAnchor>
      </Links>
    </InternalContainer>
  </NavContainer>
)

export default Nav
