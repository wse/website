import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PageHeader from '../components/page-header'
import Seo from '../components/seo'
import styled from 'styled-components'

const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Song = styled.li`
  padding: 16px 16px 16px 0;
  flex-basis: 50%;
  border-bottom: 1px solid #efefef;

  &:nth-child(2n) {
    border-left: 1px solid #efefef;
    padding-left: 16px;
  }
`

const SongName = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-transform: capitalize;
`

const Artists = styled.div`
  font-weight: bold;
  font-size: 12px;
  text-transform: capitalize;
  padding: 8px 0;
  margin-right: 12px;
  color: #6d6d6d;
  line-height: 16px;
`

const StyledAudioLink = styled.a`
  font-size: 12px;
  text-decoration: underline;
  text-transform: capitalize;
  padding: 8px 0;
  margin-right: 8px;
`

const Mixtape = ({ data }) => {
  const songs = data.allMixtapeYaml.nodes

  return (
    <Layout>
      <Seo title="Mixtape" />
      <PageHeader title="Mixtape" />
      <Container>
        {songs &&
          songs.map(
            ({
              Album_Name,
              Artist_Name_s_,
              Spotify_ID,
              Duration__ms_,
              Song_Name,
            }) => {
              return (
                <Song key={Spotify_ID}>
                  <SongName>{Song_Name}</SongName>
                  <Artists>{Artist_Name_s_}</Artists>
                  <StyledAudioLink
                    target="_blank"
                    rel="noreferrer"
                    href={`spotify:track:${Spotify_ID}`}
                  >
                    Spotify
                  </StyledAudioLink>
                  <StyledAudioLink
                    target="_blank"
                    rel="noreferrer"
                    href={`https://www.youtube.com/results?search_query=${Artist_Name_s_}+${Song_Name}`}
                  >
                    Youtube
                  </StyledAudioLink>
                </Song>
              )
            },
          )}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMixtapeYaml(sort: { fields: Song_Name, order: ASC }) {
      nodes {
        Song_Name
        Album_Name
        Artist_IDs
        Artist_Name_s_
        Duration__ms_
        Spotify_ID
        id
      }
    }
  }
`
export default Mixtape
