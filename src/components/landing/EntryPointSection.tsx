import { EntryPoint, EntryPointSize, EntryPointType } from "@thinkflagship/web-shorts";

const EntryPointSection = () => {
  return (
    <section className="landing-container-left pr-4 md:pr-0 landing-section-padding">
      <h2 className="landing-section-heading">Short-form video platform for ecommerce</h2>
      <p className="landing-section-description pb-10 md:pb-9 2xl:pb-11">
        Click below to see for yourself why Horizon leads the industry in short-form video engagement.
      </p>

      <EntryPoint
        id="#897749"
        skeletonType={EntryPointType.RECTANGLE}
        skeletonSize={EntryPointSize.BOLD}
      />
    </section>
  );
};

export default EntryPointSection;
