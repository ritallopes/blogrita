import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"

import * as S from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: { author, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          description
          author
          position
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink to="">
        <Avatar />
        <S.ProfileAuthor>
          {author}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      {description}
    </S.ProfileWrapper>
  )
}

export default Profile
