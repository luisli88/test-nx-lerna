import './pkg.module.scss';

/* eslint-disable-next-line */
export interface PkgProps {
  name: string
  title: string
}

export function Pkg(props: PkgProps) {
  const { name, title } = props;
  return (
    <div className='pkg__container'>
      <h1 className='pkg__title'>Welcome to {title}, {name}!</h1>
    </div>
  );
}

export default Pkg;
