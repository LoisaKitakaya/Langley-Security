import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <form className="has-background-light has-text-left">
      <div className="columns mb-0">
        <div class="field column">
          <label class="label" htmlFor="first_name">
            First name
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
            Last name
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
            Business email
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
            Phone
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
            Company name
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
            City
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
            Services
          </label>
          <div class="select is-fullwidth">
            <select name="service" required>
              <option disabled selected>
                Select service of interest
              </option>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
        <div class="field column">
          <label class="label" htmlFor="industry">
            Industries
          </label>
          <div class="select is-fullwidth">
            <select name="industry" required>
              <option disabled selected>
                Select your industry
              </option>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field mb-5">
        <label class="label">Message(optional)</label>
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
