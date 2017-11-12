import React from 'react'

class Profile extends React.Component {
  componentDidMount() {
    if (typeof twttr != 'undefined') {
      twttr.widgets.load(this.refs.twButton)
    }
  }

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div>
        <section className="text-center">
          <div className="container">
            <img
              src={pathPrefix + '/img/simple-logo.png'}
              alt="inlclusion.tech logo"
              className="rounded-circle mx-auto d-block"
              width="120px"
            />
            <h1>inclusion.tech</h1>
            <div>
              <a
                ref="twButton"
                href="https://twitter.com/jaxx2104"
                className="twitter-follow-button"
                data-show-count="false"
              >
                Contact us
              </a>
            </div>
          </div>
        </section>

        <section id="features" className="bg-primary text-white text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">FOLLOW</h2>
                <hr className="border-white" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="HTML"
                >
                  <i
                    className="devicon-html5-plain wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="JavaScript"
                >
                  <i
                    className="devicon-javascript-plain wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="React.js"
                >
                  <i
                    className="devicon-react-original wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Vue.js"
                >
                  <i
                    className="devicon-vuejs-plain wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Node.js"
                >
                  <i
                    className="devicon-nodejs-plain-wordmark wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="PHP"
                >
                  <i
                    className="devicon-php-plain wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Swift"
                >
                  <i
                    className="devicon-swift-plain-wordmark wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="AWS"
                >
                  <i
                    className="devicon-amazonwebservices-plain-wordmark"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">About</h2>
                <hr className="border-primary" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-8">
                <p>
                  Inclusion and diversity in tech are broadly embraced.<br />
                  How to realize these goals is still being pioneered. Below we share strategies and resources for empowering your company to navigate this transformation.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="community" className="bg-primary text-white text-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-3 text-center">
                <h2 className="section-heading">Strategy & Staffing</h2>
                <p>Leverage proven forms of engagement that emphasize your team's strengths</p>
              </div>
              <div className="col-md-9 text-left">
                <li>
                  <a className="text-white" href="https://github.com/jaxx2104/gatsby-starter-bootstrap">
                    Self-managed Teams
                  </a>
                  <p>Support the growth of a permanent team of volunteers by remunerating time spent on D&I-promoting activites. <a href="http://projectinclude.org/implementing_culture?size=75-#use-a-team-to-build-culture">Learn more >> </a></p>
                </li>
                <li>
                  <a className="text-white" href="https://github.com/jaxx2104/gulp-sample">
                    Diversity Task Forces
                  </a>
                  <p>Regularly convene leadership and members of under-represented groups to assess progress and identify opportunities for innovation and new initiatives. <a href="https://hbr.org/2016/07/why-diversity-programs-fail">Learn more >> </a></p>
                </li>
                <li>
                  <a className="text-white" href="https://github.com/jaxx2104/gulp-sample">
                    Diversity Manager
                  </a>
                  <p>Hire a D&I lead to effectively marshall your dedicated D&I human and financial resources. <a href="https://www.techrepublic.com/article/does-your-company-need-a-chief-diversity-officer/">Learn more >> </a></p>
                </li>
              </div>
            </div>
          </div>
        </section>
        <section id="hiring">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-3 text-center">
                <h2 className="section-heading">Hiring</h2>
                <p>One of the best ways to prevent bias from sneaking into your hiring process is to be intentional about your process, and to train those conducting interviews. Here we provide some key points to get you started.</p>
              </div>
              <div className="col-md-9 text-left">
                <li>
                  <a href="https://github.com/jaxx2104/gatsby-starter-bootstrap">
                    Recruiting
                  </a>
                  <p>Expand your <a href="http://techcrunch.com/2015/01/24/prioritizing-diversity-in-2015/">sourcing strategy</a> and <a href="http://recode.net/2015/04/20/textio-spell-checks-for-gender-bias/">write better job descriptions</a>.</p>
                </li>
                <li>
                  <a href="https://github.com/jaxx2104/gulp-sample">
                    Coding Challenges
                  </a>
                  <p>Emphasize skills with practical implications for day-to-day work such as learning new technologies over areas with less practical relevance such as algorithms and data structures. <a href="https://corner.squareup.com/2013/09/pair-programming-interviews.html">Learn more >></a></p>
                </li>
                <li>
                  <a href="https://github.com/jaxx2104/irm">Interviewing</a>
                  <p>Let candidates know what to expect and how to prepare, this will help to level the playing field for candidates from underrepresented backgrounds who may not already be familiar with the process or have been prepared for it by schools or friends. <a href="https://stripe.com/jobs/engineering-onsite.pdf">Learn more >> </a></p>
                  <p>Rather than high-pressure, artificial tests which often involve using a whiteboard under scrutiny, and which have been shown to trigger <a href="https://www.amazon.com/Whistling-Vivaldi-Stereotypes-Affect-Issues-ebook/dp/B004TM9NOO?ie=UTF8&btkr=1&ref_=dp-kindle-redirect">stereotype threat</a>, allow applicants to build on their own terms, using their own tools, and explain how they decided between trade-offs, and speak to the larger project management and design process. In building your team, this will allow you to gain insight into how well applicants will be able to negotiate ambiguity and collaborate with their team members and other departments. <a href="https://www.google.ca/about/careers/lifeatgoogle/hiringprocess/">Learn more >> </a></p>
                </li>
                <li>
                  <a href="https://github.com/jaxx2104/mt-dataapi-php">
                    Feedback
                  </a>
                  <p>Provide applicants with an opportunity to provide anonymous feedback on their experience. <a href="#">Learn more >> </a></p>
                </li>
              </div>
            </div>
          </div>
        </section>
        <section id="community" className="bg-primary text-white text-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-3 text-center">
                <h2 className="section-heading">Community</h2>
              </div>
              <div className="col-md-9 text-left">
                <li>
                  <a className="text-white" href="https://github.com/jaxx2104/gatsby-starter-bootstrap">
                    Affinity groups
                  </a>
                </li>
                <li>
                  <a className="text-white" href="https://github.com/jaxx2104/gulp-sample">
                    Code of Conduct
                  </a>
                </li>
                <li>
                  <a className="text-white" href="https://github.com/jaxx2104/gulp-sample">
                    Mentorship
                  </a>
                </li>
              </div>
            </div>
          </div>
        </section>
        <section id="features">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-9">
                <img
                  src={pathPrefix + '/img/work3.png'}
                  className="img-rounded img-responsive"
                  title=""
                  alt=""
                />
              </div>
              <div className="col-md-9 text-center align-middle">
                <h2 className="section-heading">Degree Works</h2>
                <p>
                  過去の制作は<a href="https://old.jaxx2104.info/">こちら</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Profile
