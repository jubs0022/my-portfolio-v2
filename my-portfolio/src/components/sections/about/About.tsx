import Desktop from './Desktop'

export default function Header() {
  return (
    <div>
      <div className="hidden md:block max-w-screen-xl place-content-center mx-auto">
        <Desktop />
      </div>

      {/* Mobile: show on mobile only */}
      <div className="block md:hidden max-w-screen-xl">
        {/*<Mobile />*/}
      </div>
    </div>
  );
}