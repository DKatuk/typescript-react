type Name = {
  first: string;
  last: string;
};

export type PersonListProps = {
  names: Name[];
}; // array of objects, but this object has a type with two fields : first and last, which are both string.
