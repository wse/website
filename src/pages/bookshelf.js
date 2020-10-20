import React from 'react'
import Layout from '../components/layout'
import PageHeader from '../components/page-header'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Seo from '../components/seo'

const Container = styled.ul``

const Book = styled.li`
  padding: 16px 0;
  max-width: 500px;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-transform: capitalize;
`

const AuthorBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Author = styled.div`
  font-weight: bold;
  font-size: 12px;
  text-transform: capitalize;
  padding: 8px 0;
  margin-right: 12px;
  color: #6d6d6d;
`

const StyledLinkIcon = styled.img`
  width: 12px;
`

const LinkIcon = ({ data }) => {
  return (
    <StyledLinkIcon
      alt=""
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAAB30lEQVRIia3Wv2sUQRjG8c/dRUQbRawVogYUjHp97LUQFMTO/AliGXKEJApaKFgKEkgsxMYfWNgIFoJFRKNRLGyvE5MyYHGixdyR2WF3cuvlhYHded95v/vOPvPuNoxuLVzFZUygh3U8xrtdyE8/8Vf8rRgr2DsqpI3NDGQwlqExAuQNDkVzH/FSqGAaRyLf+f+FpJXcEd7VwA6jG/kf7QZkviJ2MYpZbdaAHMAVYXu+9OcWMqA/0XWrImYoO5XxjWHNdkVPxoZI2MBFXBLk/Fs4JyuZNbdxLrp/sRPkGD4ol22vnzDd/rkkbq0kpmBtbFRA4nE9WtNJfBs4vhMkVdc67glS3Yrmb/TXzCbxm4rbNxRkUVE548KJv499mCmp5GxdyAz244EggPEovoVbSfwvnKkLme37bkZzW1jqV/OtBDKZg0yUQDqRfzrxlY2fOJ2DtIQXHS+aS2KagpR7FZD3OJqDwLVk0d1M7Emhgb7GWzzEBUN+BZ5GkE/yfSnXdrLWxIno/pViM4xtHt+FhrokVH6wDmzVdkULGUh6GNt1IISTPkjQFT5aA2sJTz4yBKaSRF3hEHYUW/1IkIEtK5ftrkIIPxQ52GdF0dS2VP9TQheYxB78wHM8U63GoewfAo7YbZrQf6sAAAAASUVORK5CYII="
    />
  )
}

const Bookshelf = ({ data }) => {
  const books = data.allBooksYaml.nodes

  return (
    <Layout>
      <Seo title="Bookshelf" />
      <PageHeader title="Bookshelf" />
      <Container>
        {books &&
          books.map(({ title, authors, links }) => {
            return (
              <Book key={title}>
                <Title>{title}</Title>
                <AuthorBlock>
                  {authors &&
                    authors.map(author => {
                      return <Author key={author}>{author}</Author>
                    })}
                </AuthorBlock>
                {links &&
                  links.map(link => {
                    return (
                      <a
                        key={link}
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkIcon />
                      </a>
                    )
                  })}
              </Book>
            )
          })}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query BooksQuery {
    allBooksYaml(sort: { fields: title, order: ASC }) {
      nodes {
        authors
        title
        links
      }
    }
  }
`
export default Bookshelf
