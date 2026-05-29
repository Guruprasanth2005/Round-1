import { calDays, mentors, progress } from "../data/mockData";

export default function RightSidebar() {
  return (
    <aside className="rs">
      <div className="calendarBlock">
        <div className="calHeader">
          <h3 className="rsTitle" style={{ marginBottom: 0 }}>
            November 2021
          </h3>

          <div className="calNav">
            <button className="calNavBtn">‹</button>
            <button className="calNavBtn">›</button>
          </div>
        </div>

        <div className="calGrid">
          {calDays.map((d) => (
            <div
              key={d.date}
              className={`calCell ${d.active ? "active" : ""}`}
            >
              <span
                className={`calLabel ${d.active ? "active" : ""}`}
              >
                {d.label}
              </span>

              <span
                className={`calNum ${d.active ? "active" : ""}`}
              >
                {d.date}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="rsDiv" />

      <div className="mentorsBlock">
        <h3 className="rsTitle">Mentors</h3>

        {mentors.map((m) => (
          <div key={m.id} className="mentorRow">
            <div
              className="mentorAvatar"
              style={{
                background: m.bg,
                color: m.fg,
              }}
            >
              {m.letter}
            </div>

            <div className="mentorInfo">
              <span className="mentorName">{m.name}</span>
              <span className="mentorRole">{m.role}</span>
              <span className="mentorExp">{m.exp}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="rsDiv" />

      <div className="progressBlock">
        <h3 className="rsTitle">Learning Progress</h3>

        {progress.map((p) => (
          <div key={p.id} className="progItem">
            <div className="progMeta">
              <span className="progLabel">{p.label}</span>
              <span className="progPct">{p.pct}%</span>
            </div>

            <div className="progTrack">
              <div
                className="progFill"
                style={{ width: `${p.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}