const FooterTop = () => {
  return (
    <footer>
      <div className="footer-module-container">
        <div className="footer-newsletter">
          <h3>📫 New tools in your inbox</h3>
        </div>
        <label form="news-email">
          Join over 6800 subscribers. You'll get new tools as soon as they're
          published and occasional project updates.
        </label>
        <form>
          <input type="email" id="news-email" placeholder="Enter your email" />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
      <div className="about-untools">
        <h3>ℹ️ About Untools</h3>
        <p>
          Collection of thinking tools and frameworks to help you solve
          problems, make decisions and understand systems.
          <br />
          <a href="/about">More about Untools</a>
        </p>
        <p>
          Do you have feedback or want to suggest a tool?
          <br />
          <a href="https://twitter.com/amrancz" target="_blank">
            Let me know on Twitter!
          </a>
        </p>
      </div>
    </footer>
  );
};

export default FooterTop;
