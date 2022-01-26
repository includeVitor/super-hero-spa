import styled, { css } from 'styled-components'

type PowerStatsProps = {
  $powerstats: boolean
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  max-width: 90%;
`

const PowerStats = styled.div<PowerStatsProps>`
  ${props =>
    props.$powerstats &&
    css`
      display: flex;
      flex-direction: column;
    `}
`

export { Section, PowerStats }
