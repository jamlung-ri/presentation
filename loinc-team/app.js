(function () {
  "use strict";

  var team = window.TEAM || [];
  var grid = document.getElementById("grid");
  var filters = document.getElementById("filters");
  var count = document.getElementById("count");
  var dialog = document.getElementById("bio");
  var canHover = window.matchMedia("(hover: hover)").matches;
  var activeTag = null;

  var LINKEDIN_PATH = "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3V9.75zm6.5 0h3.8v1.6h.06c.53-1 1.83-1.9 3.76-1.9 4.02 0 4.88 2.5 4.88 5.9V21h-4v-4.95c0-1.3-.03-2.95-1.9-2.95-1.9 0-2.2 1.4-2.2 2.85V21h-4V9.75z";

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function initials(name) {
    var parts = name.trim().split(/\s+/);
    return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
  }

  // Stable hue per person so initials tiles differ but stay in the same family.
  function hue(name) {
    var h = 0;
    for (var i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % 360;
    return 185 + (h % 70);
  }

  function portrait(person, className) {
    var box = el("div", className);
    if (person.photo) {
      var img = el("img");
      img.src = person.photo;
      img.alt = "";
      img.loading = "lazy";
      box.appendChild(img);
    } else {
      var h = hue(person.name);
      box.style.background = "linear-gradient(160deg, hsl(" + h + " 45% 62%), hsl(" + (h + 25) + " 50% 34%))";
      box.appendChild(el("span", "initials", initials(person.name)));
    }
    return box;
  }

  // True when there is anything to say beyond name, title and photo.
  function hasBackground(person) {
    return Boolean(person.before || person.blurb || person.bio ||
      (person.focus && person.focus.length) || (person.askMeAbout && person.askMeAbout.length));
  }

  function tagList(tags, className) {
    var list = el("ul", className);
    (tags || []).forEach(function (t) {
      list.appendChild(el("li", null, t));
    });
    return list;
  }

  function linkedinLink(person) {
    var a = el("a", "linkedin");
    a.href = person.linkedin;
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", person.name + " on LinkedIn");
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", LINKEDIN_PATH);
    svg.appendChild(path);
    a.appendChild(svg);
    a.addEventListener("click", function (e) { e.stopPropagation(); });
    return a;
  }

  function card(person) {
    var node = el("article", "card");
    node.tabIndex = 0;
    node.setAttribute("aria-label", person.name + ", " + person.role);
    node.dataset.tags = (person.askMeAbout || []).join("|");

    node.appendChild(portrait(person, "photo"));

    var label = el("div", "label");
    label.appendChild(el("h2", null, person.name));
    label.appendChild(el("p", null, person.role));
    node.appendChild(label);

    var back = el("div", "back");
    back.appendChild(el("h2", null, person.name));
    back.appendChild(el("p", "role", person.role));
    if (person.before) {
      var before = el("p", "before");
      before.appendChild(el("span", "eyebrow", "Before LOINC"));
      before.appendChild(document.createTextNode(person.before));
      back.appendChild(before);
    }
    if (person.blurb) back.appendChild(el("p", "blurb", person.blurb));
    if (!hasBackground(person)) back.appendChild(el("p", "soon", "Background coming soon"));
    if (person.askMeAbout && person.askMeAbout.length) {
      back.appendChild(el("span", "eyebrow", "Ask me about"));
      back.appendChild(tagList(person.askMeAbout, "tags"));
    }
    var foot = el("div", "foot");
    if (person.linkedin) foot.appendChild(linkedinLink(person));
    if (hasBackground(person)) {
      var more = el("button", "more", "Read full bio →");
      more.type = "button";
      more.addEventListener("click", function (e) {
        e.stopPropagation();
        openBio(person);
      });
      foot.appendChild(more);
    }
    if (foot.children.length) back.appendChild(foot);
    node.appendChild(back);

    // Mouse users see the back on hover, so a click goes straight to the full bio.
    // Touch users have no hover, so the first tap flips the card.
    node.addEventListener("click", function () {
      if (canHover) {
        if (hasBackground(person)) openBio(person);
      } else {
        var wasOpen = node.classList.contains("open");
        closeCards();
        if (!wasOpen) node.classList.add("open");
      }
    });
    node.addEventListener("keydown", function (e) {
      if (e.target === node && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        if (hasBackground(person)) openBio(person);
      }
    });
    return node;
  }

  function closeCards() {
    Array.prototype.forEach.call(grid.querySelectorAll(".card.open"), function (c) {
      c.classList.remove("open");
    });
  }

  function openBio(person) {
    var body = document.getElementById("bio-body");
    body.textContent = "";

    var head = el("div", "bio-head");
    head.appendChild(portrait(person, "bio-photo"));
    var who = el("div");
    var name = el("h2", null, person.name);
    name.id = "bio-name";
    if (person.credentials) name.appendChild(el("span", "creds", ", " + person.credentials));
    who.appendChild(name);
    who.appendChild(el("p", "role", person.role));
    if (person.since) who.appendChild(el("p", "since", "With LOINC since " + person.since));
    head.appendChild(who);
    body.appendChild(head);

    if (person.before) {
      body.appendChild(el("h3", null, "Before LOINC"));
      body.appendChild(el("p", null, person.before));
    }
    var paragraphs = person.bio || (person.blurb ? [person.blurb] : []);
    if (paragraphs.length) body.appendChild(el("h3", null, "About"));
    paragraphs.forEach(function (p) {
      body.appendChild(el("p", null, p));
    });
    if (person.focus && person.focus.length) {
      body.appendChild(el("h3", null, "Owns"));
      body.appendChild(tagList(person.focus, "focus"));
    }
    if (person.askMeAbout && person.askMeAbout.length) {
      body.appendChild(el("h3", null, "Ask me about"));
      body.appendChild(tagList(person.askMeAbout, "tags"));
    }
    if (person.linkedin || person.profile) {
      var links = el("div", "links");
      if (person.linkedin) links.appendChild(linkedinLink(person));
      if (person.profile) {
        var a = el("a", "profile", "Regenstrief profile →");
        a.href = person.profile;
        a.target = "_blank";
        a.rel = "noopener";
        links.appendChild(a);
      }
      body.appendChild(links);
    }

    dialog.showModal();
  }

  function applyFilter() {
    var shown = 0;
    Array.prototype.forEach.call(grid.children, function (c) {
      var match = !activeTag || c.dataset.tags.split("|").indexOf(activeTag) !== -1;
      c.hidden = !match;
      if (match) shown++;
    });
    Array.prototype.forEach.call(filters.children, function (b) {
      b.setAttribute("aria-pressed", String((b.dataset.tag || null) === activeTag));
    });
    count.textContent = activeTag
      ? shown + (shown === 1 ? " person" : " people") + " to ask about " + activeTag
      : team.length + " people on the team";
  }

  function buildFilters() {
    var counts = {};
    team.forEach(function (p) {
      (p.askMeAbout || []).forEach(function (t) { counts[t] = (counts[t] || 0) + 1; });
    });
    var tags = Object.keys(counts).sort(function (a, b) {
      return counts[b] - counts[a] || a.localeCompare(b);
    });
    [null].concat(tags).forEach(function (t) {
      var b = el("button", "chip", t || "Everyone");
      b.type = "button";
      if (t) b.dataset.tag = t;
      b.addEventListener("click", function () {
        activeTag = t;
        closeCards();
        applyFilter();
      });
      filters.appendChild(b);
    });
  }

  team.forEach(function (p) { grid.appendChild(card(p)); });
  buildFilters();
  applyFilter();

  document.getElementById("bio-close").addEventListener("click", function () { dialog.close(); });
  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) dialog.close();
  });
})();
