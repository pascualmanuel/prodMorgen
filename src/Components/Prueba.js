import React from "react";
import { useEffect, useState, useRef } from "react";
import "../Styles/Atendeme.css";
import "../Styles/App.css";
import Popup from "./PopUp";

const AutoScroll = () => {
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      if (windowHeight + scrollTop >= documentHeight) {
        setIsScrolling(false);
      } else {
        setIsScrolling(true);
      }
    };

    const autoScroll = () => {
      if (isScrolling) {
        window.scrollBy(0, 1);
      }
    };

    const scrolldelay = setInterval(autoScroll, 10);

    return () => {
      clearInterval(scrolldelay);
    };

    // Add any dependencies to the [] if needed
  }, [isScrolling]);

  const topScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsScrolling(true);
  };

  return (
    <>
      <div className="prueba-atendeme">
        <div style={{ width: 300 }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            bibendum lacinia ipsum, nec tempus augue vulputate vel. Morbi congue
            gravida mauris eget iaculis. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse
            luctus felis ut sagittis accumsan. Etiam dignissim mi id augue
            porta, vel consectetur ipsum rhoncus. Fusce dui sapien, faucibus
            feugiat tempus sit amet, eleifend id dui. Aenean mollis nunc ac
            velit cursus auctor. Maecenas elit nisi, varius nec venenatis at,
            rutrum vitae nunc. Quisque lobortis augue ante, a gravida justo
            aliquam eu. Sed quis elementum lorem. In eu ultrices lectus. Donec
            dignissim mollis metus, eu convallis mi gravida eu. Aliquam
            vulputate ut urna ut hendrerit. Proin placerat ex lacus. Curabitur
            egestas lacinia metus maximus ultricies. Nunc malesuada ligula ac
            purus viverra, a lobortis metus lobortis. Duis tristique feugiat
            orci, et tempor mi facilisis a. Aenean mollis nunc quis libero
            bibendum, ut mattis urna placerat. Vivamus et tincidunt velit, in
            vehicula massa. Duis pulvinar vel ex sit amet feugiat. Vivamus vitae
            justo eu augue sodales vehicula ac in augue. Aenean non imperdiet
            quam. Nam viverra dui et lorem vehicula, quis viverra diam ultrices.
            Aenean ultricies pulvinar massa dictum mollis. Donec ultricies metus
            in laoreet interdum. Donec id felis eget mi lacinia aliquet. Mauris
            dolor nisl, iaculis a scelerisque a, gravida non tortor. Nunc eget
            purus et lacus vestibulum ullamcorper. Proin dui nisl, suscipit in
            metus at, aliquam elementum leo. Duis ac nisl in sapien rhoncus
            accumsan. Quisque pretium volutpat volutpat. Nulla congue nibh eget
            purus feugiat laoreet. Nunc vitae aliquam est, ac rutrum velit. In
            et tortor sed nibh tristique blandit. Donec consequat, lacus id
            ullamcorper venenatis, massa tortor placerat ex, vel lacinia libero
            ipsum et ex. Praesent id fringilla ipsum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Suspendisse bibendum lacinia
            ipsum, nec tempus augue vulputate vel. Morbi congue gravida mauris
            eget iaculis. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia Curae; Suspendisse luctus felis ut
            sagittis accumsan. Etiam dignissim mi id augue porta, vel
            consectetur ipsum rhoncus. Fusce dui sapien, faucibus feugiat tempus
            sit amet, eleifend id dui. Aenean mollis nunc ac velit cursus
            auctor. Maecenas elit nisi, varius nec venenatis at, rutrum vitae
            nunc. Quisque lobortis augue ante, a gravida justo aliquam eu. Sed
            quis elementum lorem. In eu ultrices lectus. Donec dignissim mollis
            metus, eu convallis mi gravida eu. Aliquam vulputate ut urna ut
            hendrerit. Proin placerat ex lacus. Curabitur egestas lacinia metus
            maximus ultricies. Nunc malesuada ligula ac purus viverra, a
            lobortis metus lobortis. Duis tristique feugiat orci, et tempor mi
            facilisis a. Aenean mollis nunc quis libero bibendum, ut mattis urna
            placerat. Vivamus et tincidunt velit, in vehicula massa. Duis
            pulvinar vel ex sit amet feugiat. Vivamus vitae justo eu augue
            sodales vehicula ac in augue. Aenean non imperdiet quam. Nam viverra
            dui et lorem vehicula, quis viverra diam ultrices. Aenean ultricies
            pulvinar massa dictum mollis. Donec ultricies metus in laoreet
            interdum. Donec id felis eget mi lacinia aliquet. Mauris dolor nisl,
            iaculis a scelerisque a, gravida non tortor. Nunc eget purus et
            lacus vestibulum ullamcorper. Proin dui nisl, suscipit in metus at,
            aliquam elementum leo. Duis ac nisl in sapien rhoncus accumsan.
            Quisque pretium volutpat volutpat. Nulla congue nibh eget purus
            feugiat laoreet. Nunc vitae aliquam est, ac rutrum velit. In et
            tortor sed nibh tristique blandit. Donec consequat, lacus id
            ullamcorper venenatis, massa tortor placerat ex, vel lacinia libero
            ipsum et ex. Praesent id fringilla ipsum.
          </p>

          {/* Jump to another place on the page */}
          <button onClick={topScroll}>Jump to another place on the page</button>
        </div>

        <div style={{ width: 300 }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            bibendum lacinia ipsum, nec tempus augue vulputate vel. Morbi congue
            gravida mauris eget iaculis. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse
            luctus felis ut sagittis accumsan. Etiam dignissim mi id augue
            porta, vel consectetur ipsum rhoncus. Fusce dui sapien, faucibus
            feugiat tempus sit amet, eleifend id dui. Aenean mollis nunc ac
            velit cursus auctor. Maecenas elit nisi, varius nec venenatis at,
            rutrum vitae nunc. Quisque lobortis augue ante, a gravida justo
            aliquam eu. Sed quis elementum lorem. In eu ultrices lectus. Donec
            dignissim mollis metus, eu convallis mi gravida eu. Aliquam
            vulputate ut urna ut hendrerit. Proin placerat ex lacus. Curabitur
            egestas lacinia metus maximus ultricies. Nunc malesuada ligula ac
            purus viverra, a lobortis metus lobortis. Duis tristique feugiat
            orci, et tempor mi facilisis a. Aenean mollis nunc quis libero
            bibendum, ut mattis urna placerat. Vivamus et tincidunt velit, in
            vehicula massa. Duis pulvinar vel ex sit amet feugiat. Vivamus vitae
            justo eu augue sodales vehicula ac in augue. Aenean non imperdiet
            quam. Nam viverra dui et lorem vehicula, quis viverra diam ultrices.
            Aenean ultricies pulvinar massa dictum mollis. Donec ultricies metus
            in laoreet interdum. Donec id felis eget mi lacinia aliquet. Mauris
            dolor nisl, iaculis a scelerisque a, gravida non tortor. Nunc eget
            purus et lacus vestibulum ullamcorper. Proin dui nisl, suscipit in
            metus at, aliquam elementum leo. Duis ac nisl in sapien rhoncus
            accumsan. Quisque pretium volutpat volutpat. Nulla congue nibh eget
            purus feugiat laoreet. Nunc vitae aliquam est, ac rutrum velit. In
            et tortor sed nibh tristique blandit. Donec consequat, lacus id
            ullamcorper venenatis, massa tortor placerat ex, vel lacinia libero
            ipsum et ex. Praesent id fringilla ipsum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Suspendisse bibendum lacinia
            ipsum, nec tempus augue vulputate vel. Morbi congue gravida mauris
            eget iaculis. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia Curae; Suspendisse luctus felis ut
            sagittis accumsan. Etiam dignissim mi id augue porta, vel
            consectetur ipsum rhoncus. Fusce dui sapien, faucibus feugiat tempus
            sit amet, eleifend id dui. Aenean mollis nunc ac velit cursus
            auctor. Maecenas elit nisi, varius nec venenatis at, rutrum vitae
            nunc. Quisque lobortis augue ante, a gravida justo aliquam eu. Sed
            quis elementum lorem. In eu ultrices lectus. Donec dignissim mollis
            metus, eu convallis mi gravida eu. Aliquam vulputate ut urna ut
            hendrerit. Proin placerat ex lacus. Curabitur egestas lacinia metus
            maximus ultricies. Nunc malesuada ligula ac purus viverra, a
            lobortis metus lobortis. Duis tristique feugiat orci, et tempor mi
            facilisis a. Aenean mollis nunc quis libero bibendum, ut mattis urna
            placerat. Vivamus et tincidunt velit, in vehicula massa. Duis
            pulvinar vel ex sit amet feugiat. Vivamus vitae justo eu augue
            sodales vehicula ac in augue. Aenean non imperdiet quam. Nam viverra
            dui et lorem vehicula, quis viverra diam ultrices. Aenean ultricies
            pulvinar massa dictum mollis. Donec ultricies metus in laoreet
            interdum. Donec id felis eget mi lacinia aliquet. Mauris dolor nisl,
            iaculis a scelerisque a, gravida non tortor. Nunc eget purus et
            lacus vestibulum ullamcorper. Proin dui nisl, suscipit in metus at,
            aliquam elementum leo. Duis ac nisl in sapien rhoncus accumsan.
            Quisque pretium volutpat volutpat. Nulla congue nibh eget purus
            feugiat laoreet. Nunc vitae aliquam est, ac rutrum velit. In et
            tortor sed nibh tristique blandit. Donec consequat, lacus id
            ullamcorper venenatis, massa tortor placerat ex, vel lacinia libero
            ipsum et ex. Praesent id fringilla ipsum.
          </p>

          {/* Jump to another place on the page */}
          <button onClick={topScroll}>Jump to another place on the page</button>
        </div>

        <div style={{ width: 300 }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            bibendum lacinia ipsum, nec tempus augue vulputate vel. Morbi congue
            gravida mauris eget iaculis. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse
            luctus felis ut sagittis accumsan. Etiam dignissim mi id augue
            porta, vel consectetur ipsum rhoncus. Fusce dui sapien, faucibus
            feugiat tempus sit amet, eleifend id dui. Aenean mollis nunc ac
            velit cursus auctor. Maecenas elit nisi, varius nec venenatis at,
            rutrum vitae nunc. Quisque lobortis augue ante, a gravida justo
            aliquam eu. Sed quis elementum lorem. In eu ultrices lectus. Donec
            dignissim mollis metus, eu convallis mi gravida eu. Aliquam
            vulputate ut urna ut hendrerit. Proin placerat ex lacus. Curabitur
            egestas lacinia metus maximus ultricies. Nunc malesuada ligula ac
            purus viverra, a lobortis metus lobortis. Duis tristique feugiat
            orci, et tempor mi facilisis a. Aenean mollis nunc quis libero
            bibendum, ut mattis urna placerat. Vivamus et tincidunt velit, in
            vehicula massa. Duis pulvinar vel ex sit amet feugiat. Vivamus vitae
            justo eu augue sodales vehicula ac in augue. Aenean non imperdiet
            quam. Nam viverra dui et lorem vehicula, quis viverra diam ultrices.
            Aenean ultricies pulvinar massa dictum mollis. Donec ultricies metus
            in laoreet interdum. Donec id felis eget mi lacinia aliquet. Mauris
            dolor nisl, iaculis a scelerisque a, gravida non tortor. Nunc eget
            purus et lacus vestibulum ullamcorper. Proin dui nisl, suscipit in
            metus at, aliquam elementum leo. Duis ac nisl in sapien rhoncus
            accumsan. Quisque pretium volutpat volutpat. Nulla congue nibh eget
            purus feugiat laoreet. Nunc vitae aliquam est, ac rutrum velit. In
            et tortor sed nibh tristique blandit. Donec consequat, lacus id
            ullamcorper venenatis, massa tortor placerat ex, vel lacinia libero
            ipsum et ex. Praesent id fringilla ipsum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Suspendisse bibendum lacinia
            ipsum, nec tempus augue vulputate vel. Morbi congue gravida mauris
            eget iaculis. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia Curae; Suspendisse luctus felis ut
            sagittis accumsan. Etiam dignissim mi id augue porta, vel
            consectetur ipsum rhoncus. Fusce dui sapien, faucibus feugiat tempus
            sit amet, eleifend id dui. Aenean mollis nunc ac velit cursus
            auctor. Maecenas elit nisi, varius nec venenatis at, rutrum vitae
            nunc. Quisque lobortis augue ante, a gravida justo aliquam eu. Sed
            quis elementum lorem. In eu ultrices lectus. Donec dignissim mollis
            metus, eu convallis mi gravida eu. Aliquam vulputate ut urna ut
            hendrerit. Proin placerat ex lacus. Curabitur egestas lacinia metus
            maximus ultricies. Nunc malesuada ligula ac purus viverra, a
            lobortis metus lobortis. Duis tristique feugiat orci, et tempor mi
            facilisis a. Aenean mollis nunc quis libero bibendum, ut mattis urna
            placerat. Vivamus et tincidunt velit, in vehicula massa. Duis
            pulvinar vel ex sit amet feugiat. Vivamus vitae justo eu augue
            sodales vehicula ac in augue. Aenean non imperdiet quam. Nam viverra
            dui et lorem vehicula, quis viverra diam ultrices. Aenean ultricies
            pulvinar massa dictum mollis. Donec ultricies metus in laoreet
            interdum. Donec id felis eget mi lacinia aliquet. Mauris dolor nisl,
            iaculis a scelerisque a, gravida non tortor. Nunc eget purus et
            lacus vestibulum ullamcorper. Proin dui nisl, suscipit in metus at,
            aliquam elementum leo. Duis ac nisl in sapien rhoncus accumsan.
            Quisque pretium volutpat volutpat. Nulla congue nibh eget purus
            feugiat laoreet. Nunc vitae aliquam est, ac rutrum velit. In et
            tortor sed nibh tristique blandit. Donec consequat, lacus id
            ullamcorper venenatis, massa tortor placerat ex, vel lacinia libero
            ipsum et ex. Praesent id fringilla ipsum.
          </p>

          {/* Jump to another place on the page */}
          <button onClick={topScroll}>Jump to another place on the page</button>
        </div>
        <div style={{ width: 300 }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            bibendum lacinia ipsum, nec tempus augue vulputate vel. Morbi congue
            gravida mauris eget iaculis. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse
            luctus felis ut sagittis accumsan. Etiam dignissim mi id augue
            porta, vel consectetur ipsum rhoncus. Fusce dui sapien, faucibus
            feugiat tempus sit amet, eleifend id dui. Aenean mollis nunc ac
            velit cursus auctor. Maecenas elit nisi, varius nec venenatis at,
            rutrum vitae nunc. Quisque lobortis augue ante, a gravida justo
            aliquam eu. Sed quis elementum lorem. In eu ultrices lectus. Donec
            dignissim mollis metus, eu convallis mi gravida eu. Aliquam
            vulputate ut urna ut hendrerit. Proin placerat ex lacus. Curabitur
            egestas lacinia metus maximus ultricies. Nunc malesuada ligula ac
            purus viverra, a lobortis metus lobortis. Duis tristique feugiat
            orci, et tempor mi facilisis a. Aenean mollis nunc quis libero
            bibendum, ut mattis urna placerat. Vivamus et tincidunt velit, in
            vehicula massa. Duis pulvinar vel ex sit amet feugiat. Vivamus vitae
            justo eu augue sodales vehicula ac in augue. Aenean non imperdiet
            quam. Nam viverra dui et lorem vehicula, quis viverra diam ultrices.
            Aenean ultricies pulvinar massa dictum mollis. Donec ultricies metus
            in laoreet interdum. Donec id felis eget mi lacinia aliquet. Mauris
            dolor nisl, iaculis a scelerisque a, gravida non tortor. Nunc eget
            purus et lacus vestibulum ullamcorper. Proin dui nisl, suscipit in
            metus at, aliquam elementum leo. Duis ac nisl in sapien rhoncus
            accumsan. Quisque pretium volutpat volutpat. Nulla congue nibh eget
            purus feugiat laoreet. Nunc vitae aliquam est, ac rutrum velit. In
            et tortor sed nibh tristique blandit. Donec consequat, lacus id
            ullamcorper venenatis, massa tortor placerat ex, vel lacinia libero
            ipsum et ex. Praesent id fringilla ipsum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Suspendisse bibendum lacinia
            ipsum, nec tempus augue vulputate vel. Morbi congue gravida mauris
            eget iaculis. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia Curae; Suspendisse luctus felis ut
            sagittis accumsan. Etiam dignissim mi id augue porta, vel
            consectetur ipsum rhoncus. Fusce dui sapien, faucibus feugiat tempus
            sit amet, eleifend id dui. Aenean mollis nunc ac velit cursus
            auctor. Maecenas elit nisi, varius nec venenatis at, rutrum vitae
            nunc. Quisque lobortis augue ante, a gravida justo aliquam eu. Sed
            quis elementum lorem. In eu ultrices lectus. Donec dignissim mollis
            metus, eu convallis mi gravida eu. Aliquam vulputate ut urna ut
            hendrerit. Proin placerat ex lacus. Curabitur egestas lacinia metus
            maximus ultricies. Nunc malesuada ligula ac purus viverra, a
            lobortis metus lobortis. Duis tristique feugiat orci, et tempor mi
            facilisis a. Aenean mollis nunc quis libero bibendum, ut mattis urna
            placerat. Vivamus et tincidunt velit, in vehicula massa. Duis
            pulvinar vel ex sit amet feugiat. Vivamus vitae justo eu augue
            sodales vehicula ac in augue. Aenean non imperdiet quam. Nam viverra
            dui et lorem vehicula, quis viverra diam ultrices. Aenean ultricies
            pulvinar massa dictum mollis. Donec ultricies metus in laoreet
            interdum. Donec id felis eget mi lacinia aliquet. Mauris dolor nisl,
            iaculis a scelerisque a, gravida non tortor. Nunc eget purus et
            lacus vestibulum ullamcorper. Proin dui nisl, suscipit in metus at,
            aliquam elementum leo. Duis ac nisl in sapien rhoncus accumsan.
            Quisque pretium volutpat volutpat. Nulla congue nibh eget purus
            feugiat laoreet. Nunc vitae aliquam est, ac rutrum velit. In et
            tortor sed nibh tristique blandit. Donec consequat, lacus id
            ullamcorper venenatis, massa tortor placerat ex, vel lacinia libero
            ipsum et ex. Praesent id fringilla ipsum.
          </p>

          {/* Jump to another place on the page */}
          <button onClick={topScroll}>Jump to another place on the page</button>
        </div>
      </div>
    </>
  );
};

export default AutoScroll;
