import './pkg.module.scss';

/* eslint-disable-next-line */
export interface PkgProps {
  name: string
}

export function Pkg(props: PkgProps) {
  const { name } = props;
  return (
    <div>
      <h1>Welcome to Pkg, {name}!</h1>
    </div>
  );
}

export default Pkg;
