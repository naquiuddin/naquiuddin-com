import PropTypes from "prop-types";
import Unsplash from "react-unsplash-wrapper";

const Post = () => {
  return (
    <div>
      <div className="w-full featured-image-container">
        {isUnsplash ? (
          <Unsplash className="object-fill" photoId={WLUHO9A_xik} />
        ) : (
          <img className="object-fill" src="/img/" alt="" srcset="" />
        )}
      </div>
      <article>
        <h2>Managing your energy and time effectively</h2>
        <p>
          Few days back my best friend's brother called me. He is a non-tech guy
          and needed a website for his new business. I was happy and in good
          mood on that day, had some free time for next few days. I said yes and
          took the work. I started working on it. However the next day I got
          some terrible news and went emotionally down. I wasn't feeling like
          working on anything and didn't even open my laptop. My mood was low
          and I postponed the work for almost a week. He kept calling and I kept
          saying I will do it. I asked another friend who is also a developer to
          do it. He did make the website but it wasn't something my friend's
          brother liked. I couldn't ask my friend to redo it again. I finally
          told myself, if I don't do this I will be in bad position. That
          moment, though I was still in bad mood, I asked myself "why am I
          feeling so lazy and clumsy to finish this". There were all scary
          thoughts runnng through my head. I decided I will focus and put
          efforts on this website for just 25 minutes. I put my phone and laptop
          in do not distrurb mode and started a pomodoro of 25 minutes. I
          decided - regardless of how I feel or whatever happens I am not going
          to stop doing the work for 25 minutes. That 25 minutes made the whole
          difference. That 25 minutes inspired me to put another 25 minutes. I
          worked again for another 25 minutes. This time it built momentum. I've
          started another 50 minute pomodoro. Then a 90 minute pomodoro. You
          know what, after this the website went live. My friend's brother liked
          it, he asked me to do some minor tweaks, which I did and re-launched.
          Finally it took 4 hours to finish the website which I was postponing
          for the last 1 week. When I reflected this whole process, the simple
          formula popped up. Taking action makes you feel good which in turn
          motivates you to take action. The reverse is also true. Not taking
          action makes you feel down, which in turn builds resistance for you to
          take action. So remember whenever you feel down or not feeling like
          doing some important work, it means you are in a negative cycle. Just
          1 focused Action is all it takes to break the cycle. If 25 minute
          session feels difficult to focus then just try focusing for 15
          minutes. Even 10 minutes will work. You just need to break the
          negative cycle. Also remember feelings are temporary. Sometimes they
          are illusions or limiting beliefs. They could also be your thought
          distortions. Whenever you have negative thoughts or feelings about
          doing some work, try using your logical or rational mind to do the
          task and put some focused time. Remember momentum starts with first
          action regardless of how you feel when starting it. Another important
          thing to learn from this is that we overestimate our work when we are
          low. At times we may feel overwhelmed, thinking about consquences and
          past negative experiences about the work even though it isn't too big.
          If we don't know how much time certain task takes or we are feeling
          overwhelmed, it is just enough to put consistent productive effort
          without feeling rushed to finish it to build the momentum.
        </p>
      </article>
    </div>
  );
};

Post.propTypes = {};

export default Post;
