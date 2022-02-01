import './pkg.module.scss';

/* eslint-disable-next-line */
export interface PkgProps {
  name: string
  title: string
}

export function Pkg(props: PkgProps) {
  const { name, title } = props;
  return (
    <div>
      <h1>Welcome to {title}, {name}!</h1>
    </div>
  );
}

export default Pkg;
