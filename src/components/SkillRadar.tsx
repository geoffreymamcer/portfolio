import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { SKILL_METRICS } from '../constants';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-mono-200 p-3 shadow-xl">
        <p className="font-bold text-black text-xs uppercase tracking-wider mb-1">{label}</p>
        <p className="text-mono-600 text-xs font-mono">Proficiency: {payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

const SkillRadar: React.FC = () => {
  return (
    <div className="w-full h-[300px] md:h-[400px] relative">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILL_METRICS}>
          <PolarGrid gridType="polygon" stroke="#3f3f46" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: '#71717a', fontSize: 11, fontFamily: 'JetBrains Mono', fontWeight: 'bold' }}
          />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Radar
            name="Skills"
            dataKey="A"
            stroke="#ffffff"
            strokeWidth={2}
            fill="#ffffff"
            fillOpacity={0.1}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillRadar;