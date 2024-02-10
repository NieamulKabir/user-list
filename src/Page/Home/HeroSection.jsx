const HeroSection = () => {
  return (
    <div className="min-w-screen w-full">
      <div
        className="hero min-h-96"
        style={{
          backgroundImage:
            "url(https://www.getsmarter.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdFFKIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--19d01ebe98554057999a959c41f572bf259747c9/mit_csail_human_computer_interaction_for_user_experience_design_course_page_large_header_banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">User List</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
