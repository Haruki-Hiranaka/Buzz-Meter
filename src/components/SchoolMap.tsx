const SchoolMap = () => {
  return (
    <g>
      {/* 校舎（L字型の建物） */}
      <g>
        {/* 1F部分 */}
        <rect
          x="50"
          y="50"
          width="350"
          height="250"
          fill="#e0f2fe"
          stroke="#0369a1"
          strokeWidth="4"
          rx="8"
        />
        
        {/* 1F ラベル */}
        <rect x="70" y="70" width="80" height="35" fill="#0284c7" rx="6" />
        <text x="110" y="92" textAnchor="middle" fill="white" fontSize="16" fontWeight="700">
          校舎 1F
        </text>
        
        {/* 教室 */}
        <rect x="80" y="120" width="80" height="70" fill="white" stroke="#0284c7" strokeWidth="2" rx="4" />
        <text x="120" y="160" textAnchor="middle" fill="#0369a1" fontSize="12" fontWeight="600">
          1-A
        </text>
        
        <rect x="180" y="120" width="80" height="70" fill="white" stroke="#0284c7" strokeWidth="2" rx="4" />
        <text x="220" y="160" textAnchor="middle" fill="#0369a1" fontSize="12" fontWeight="600">
          1-B
        </text>
        
        <rect x="280" y="120" width="80" height="70" fill="white" stroke="#0284c7" strokeWidth="2" rx="4" />
        <text x="320" y="160" textAnchor="middle" fill="#0369a1" fontSize="12" fontWeight="600">
          1-C
        </text>
        
        {/* 廊下 */}
        <rect x="80" y="210" width="280" height="70" fill="#bae6fd" opacity="0.6" />
        <text x="220" y="250" textAnchor="middle" fill="#0c4a6e" fontSize="13" fontWeight="600">
          廊下
        </text>
        
        {/* 階段 */}
        <rect x="370" y="210" width="25" height="70" fill="#7dd3fc" stroke="#0284c7" strokeWidth="2" />
        {[...Array(7)].map((_, i) => (
          <line
            key={`stairs-${i}`}
            x1="370"
            y1={215 + i * 10}
            x2="395"
            y2={215 + i * 10}
            stroke="#0369a1"
            strokeWidth="1"
          />
        ))}
        <text x="382" y="250" textAnchor="middle" fill="#0c4a6e" fontSize="9" fontWeight="700" transform="rotate(-90 382 250)">
          階段
        </text>
        
        {/* 2F部分（1Fの上に重ねて表示） */}
        <rect
          x="50"
          y="320"
          width="350"
          height="250"
          fill="#fef3c7"
          stroke="#d97706"
          strokeWidth="4"
          rx="8"
        />
        
        {/* 2F ラベル */}
        <rect x="70" y="340" width="80" height="35" fill="#f59e0b" rx="6" />
        <text x="110" y="362" textAnchor="middle" fill="white" fontSize="16" fontWeight="700">
          校舎 2F
        </text>
        
        {/* 教室 */}
        <rect x="80" y="390" width="80" height="70" fill="white" stroke="#f59e0b" strokeWidth="2" rx="4" />
        <text x="120" y="430" textAnchor="middle" fill="#d97706" fontSize="12" fontWeight="600">
          2-A
        </text>
        
        <rect x="180" y="390" width="80" height="70" fill="white" stroke="#f59e0b" strokeWidth="2" rx="4" />
        <text x="220" y="430" textAnchor="middle" fill="#d97706" fontSize="12" fontWeight="600">
          2-B
        </text>
        
        <rect x="280" y="390" width="80" height="70" fill="white" stroke="#f59e0b" strokeWidth="2" rx="4" />
        <text x="320" y="430" textAnchor="middle" fill="#d97706" fontSize="12" fontWeight="600">
          2-C
        </text>
        
        {/* 廊下 */}
        <rect x="80" y="480" width="280" height="70" fill="#fde68a" opacity="0.6" />
        <text x="220" y="520" textAnchor="middle" fill="#78350f" fontSize="13" fontWeight="600">
          廊下
        </text>
        
        {/* 階段 */}
        <rect x="370" y="480" width="25" height="70" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
        {[...Array(7)].map((_, i) => (
          <line
            key={`stairs-2f-${i}`}
            x1="370"
            y1={485 + i * 10}
            x2="395"
            y2={485 + i * 10}
            stroke="#d97706"
            strokeWidth="1"
          />
        ))}
        <text x="382" y="520" textAnchor="middle" fill="#78350f" fontSize="9" fontWeight="700" transform="rotate(-90 382 520)">
          階段
        </text>
      </g>

      {/* 体育館 */}
      <g>
        <rect
          x="50"
          y="600"
          width="350"
          height="180"
          fill="#fee2e2"
          stroke="#dc2626"
          strokeWidth="4"
          rx="8"
        />
        
        {/* 体育館ラベル */}
        <rect x="70" y="620" width="90" height="35" fill="#ef4444" rx="6" />
        <text x="115" y="642" textAnchor="middle" fill="white" fontSize="16" fontWeight="700">
          体育館
        </text>
        
        {/* バスケットコート */}
        <rect x="80" y="670" width="310" height="90" fill="#fef2f2" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,5" />
        
        {/* センターサークル */}
        <circle cx="235" cy="715" r="25" fill="none" stroke="#dc2626" strokeWidth="2" />
        
        {/* ゴール */}
        <rect x="80" y="705" width="15" height="20" fill="#dc2626" />
        <rect x="375" y="705" width="15" height="20" fill="#dc2626" />
      </g>

      {/* グラウンド（大きく） */}
      <g>
        <rect
          x="450"
          y="50"
          width="520"
          height="730"
          fill="#dcfce7"
          stroke="#16a34a"
          strokeWidth="4"
          rx="8"
        />
        
        {/* グラウンドラベル */}
        <rect x="470" y="70" width="120" height="40" fill="#22c55e" rx="6" />
        <text x="530" y="95" textAnchor="middle" fill="white" fontSize="18" fontWeight="700">
          グラウンド
        </text>
        
        {/* トラック（大きな楕円） */}
        <ellipse cx="710" cy="415" rx="230" ry="300" fill="#f0fdf4" stroke="#16a34a" strokeWidth="4" />
        <ellipse cx="710" cy="415" rx="210" ry="280" fill="none" stroke="#22c55e" strokeWidth="3" />
        
        {/* フィールド内のライン */}
        <line x1="710" y1="115" x2="710" y2="715" stroke="#86efac" strokeWidth="2" strokeDasharray="10,5" />
        <circle cx="710" cy="415" r="40" fill="none" stroke="#86efac" strokeWidth="2" />
        
        {/* サッカーゴール */}
        <rect x="690" y="100" width="40" height="20" fill="none" stroke="#15803d" strokeWidth="3" />
        <rect x="690" y="700" width="40" height="20" fill="none" stroke="#15803d" strokeWidth="3" />
        
        {/* ペナルティエリア */}
        <rect x="650" y="100" width="120" height="60" fill="none" stroke="#86efac" strokeWidth="2" />
        <rect x="650" y="660" width="120" height="60" fill="none" stroke="#86efac" strokeWidth="2" />
        
        {/* ベンチ */}
        <rect x="480" y="350" width="70" height="25" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2" rx="4" />
        <text x="515" y="367" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="600">
          ベンチ
        </text>
        
        <rect x="870" y="350" width="70" height="25" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2" rx="4" />
        <text x="905" y="367" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="600">
          ベンチ
        </text>
        
        {/* 観客席エリア */}
        <rect x="480" y="450" width="70" height="100" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2" rx="4" />
        <text x="515" y="505" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="600">
          観客席
        </text>
        
        <rect x="870" y="450" width="70" height="100" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2" rx="4" />
        <text x="905" y="505" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="600">
          観客席
        </text>
      </g>
    </g>
  );
};

export default SchoolMap;
