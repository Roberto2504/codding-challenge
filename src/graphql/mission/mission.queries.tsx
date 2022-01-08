import { gql } from "@apollo/client";

export const FIND_MISSIONS = gql`
  query missions(
    $find: MissionsFind
  ) {
    missions(find: $find) {
      description
      id
      manufacturers
      name
      twitter
      website
      wikipedia
    }
  }
`;
