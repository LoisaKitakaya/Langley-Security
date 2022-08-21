import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <form className="has-background-light has-text-left">
      <p className="is-size-6">
        Fields marked with{" "}
        <strong>
          <sup className="has-text-danger">*</sup>
        </strong>{" "}
        are required (i.e. cannot be left blank)
      </p>
      <br />
      <div className="columns mb-0">
        <div class="field column">
          <label class="label" htmlFor="first_name">
            First name{" "}
            <strong>
              <sup className="has-text-danger">*</sup>
            </strong>
          </label>
          <div class="control">
            <input
              class="input"
              type="text"
              name="first_name"
              placeholder="e.g. John"
              required
            />
          </div>
        </div>
        <div class="field column">
          <label class="label" htmlFor="last_name">
            Last name{" "}
            <strong>
              <sup className="has-text-danger">*</sup>
            </strong>
          </label>
          <div class="control">
            <input
              class="input"
              type="text"
              name="last_name"
              placeholder="e.g. Doe"
              required
            />
          </div>
        </div>
      </div>
      <div className="columns mb-0">
        <div class="field column">
          <label class="label" htmlFor="email">
            Business email{" "}
            <strong>
              <sup className="has-text-danger">*</sup>
            </strong>
          </label>
          <div class="control">
            <input
              class="input"
              type="email"
              name="email"
              placeholder="e.g. johndoe@example.com"
              required
            />
          </div>
        </div>
        <div class="field column">
          <label class="label" htmlFor="phone">
            Phone{" "}
            <strong>
              <sup className="has-text-danger">*</sup>
            </strong>
          </label>
          <div class="control">
            <input
              class="input"
              type="text"
              name="phone"
              placeholder="phone number"
              required
            />
          </div>
        </div>
      </div>
      <div className="columns mb-0">
        <div class="field column">
          <label class="label" htmlFor="company_name">
            Company name{" "}
            <strong>
              <sup className="has-text-danger">*</sup>
            </strong>
          </label>
          <div class="control">
            <input
              class="input"
              type="text"
              name="company_name"
              placeholder="name of your company"
              required
            />
          </div>
        </div>
        <div class="field column">
          <label class="label" htmlFor="city">
            City{" "}
            <strong>
              <sup className="has-text-danger">*</sup>
            </strong>
          </label>
          <div class="control">
            <input
              class="input"
              type="text"
              name="city"
              placeholder="city of residence"
              required
            />
          </div>
        </div>
      </div>
      <div className="columns mb-0">
        <div class="field column">
          <label class="label" htmlFor="service">
            Services{" "}
            <strong>
              <sup className="has-text-danger">*</sup>
            </strong>
          </label>
          <div class="select is-fullwidth">
            <select name="service" required>
              <option disabled selected>
                Select service of interest
              </option>
              <option value="security">Security services</option>
              <option value="event">Event security services</option>
              <option value="technology">
                Technology {"&"} security systems
              </option>
              <option value="VIP">
                Close monitoring {"&"} executive protection
              </option>
              <option value="consultancy">
                Risk advisory {"&"} consultancy services
              </option>
              <option value="residential">
                Residential {"&"} private property security
              </option>
              <option value="intelligence">
                Private investigation {"&"} intelligence services
              </option>
              <option value="job">Job seeker</option>
            </select>
          </div>
        </div>
        <div class="field column">
          <label class="label" htmlFor="industry">
            Industries{" "}
            <strong>
              <sup className="has-text-danger">*</sup>
            </strong>
          </label>
          <div class="select is-fullwidth">
            <select name="industry" required>
              <option disabled selected>
                Select your industry
              </option>
              <option value="real_estate">Commercial real estate</option>
              <option value="construction">Construction</option>
              <option value="education">Education</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Healthcare</option>
              <option value="retail">Retail</option>
              <option value="transport">Transport</option>
              <option value="residential">Residential</option>
              <option value="logistics">Distribution {"&"} logistics</option>
              <option value="hospitality">Hotel {"&"} hospitality</option>
              <option value="tech">High tech {"&"} telecom</option>
              <option value="utility">Utility</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field mb-5">
        <label class="label">Message (optional)</label>
        <div class="control">
          <textarea
            class="textarea"
            placeholder="questions or comments"
          ></textarea>
        </div>
      </div>
      <label class="checkbox mb-5 ml-3">
        <input type="checkbox" required /> I agree to the{" "}
        <Link to={"/terms-&-conditions"}>terms and conditions</Link>
      </label>
      <div class="control">
        <Button type="submit" animated color="red" className="btn-fluid-2">
          <Button.Content visible>Submit</Button.Content>
          <Button.Content hidden>
            <Icon name="upload" />
          </Button.Content>
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
