export const Application = () => {
    return (
      <>
      <h1>Application form</h1>
      <h2>Fill this form</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
            <option value="CA">Canada</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I agree to the conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
      </>
    )
  }