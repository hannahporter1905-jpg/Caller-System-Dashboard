"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import {
  ReactFlow,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  Node,
  Edge,
  NodeChange,
  EdgeChange,
  Handle,
  Position,
  MiniMap
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  FileText,
  Network,
  GitBranch,
  Plug2,
  Clock,
  Bot,
  Settings,
  X,
  Plus,
  Minus,
  ArrowLeft,
  Sparkles,
  MoreHorizontal
} from "lucide-react";

const StepNode = ({ data, selected }: { data: any; selected?: boolean }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-[2px] group max-w-[250px] h-full cursor-pointer relative">
      <div className={`absolute -top-[34px] left-2 px-[9px] py-1 bg-[#3655E829] bg-opacity-20 rounded-2xl justify-center items-center gap-[5px] flex flex-row ${selected ? 'bg-[#3655E81A]' : ''}`}>
        <div className="rotate-180 flex items-center justify-center">
          <ArrowLeft size={14} className="text-[#3655E8]" />
        </div>
        <div className="text-[#3655E8] text-xs font-semibold font-Inter leading-[14px]">
          {data.badge || "Start"}
        </div>
      </div>
      <div className="border-transparent min-w-[190px] rounded-2xl flex-col justify-start items-start gap-2 flex duration-400 hover:duration-400 relative" data-testid="first-script-node">
        <div className={`w-full bg-white h-full flex px-6 py-3 border rounded-2xl flex-row justify-between items-center transition ease-in-out box-border m-[1px] ${selected ? 'border-[#3655E8] border-2 shadow-[0_0_0_3px_rgba(54,85,232,0.15)]' : 'border-[#E4E7E5] group-hover:border-[#3655E8]'}`}>
          <Handle type="target" position={Position.Left} className="invisible" />
          <span className="max-w-[190px] max-h-[246px] overflow-hidden line-clamp-3 font-semibold text-sm pr-[14px]">
            {data.label}
          </span>
          <Handle type="source" position={Position.Right} className="invisible" />
        </div>
        
        {/* Connection Plus indicator on right edge when selected */}
        {selected && (
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-[22px] h-[22px] bg-white border border-[#E4E7E5] rounded-full flex items-center justify-center shadow-sm cursor-pointer hover:bg-neutral-50 hover:border-[#3655E8] transition-colors z-10">
            <Plus size={13} className="text-[#181B19]" />
          </div>
        )}
      </div>
    </div>
  );
};
const nodeTypes = { custom: StepNode };

const initialNodes: Node[] = [
  { id: "1", type: "custom", position: { x: 250, y: 150 }, data: { label: "Intro Script", badge: "Start" } },
];
const initialEdges: Edge[] = [];

// ─────────────────────────────────────────────────────────────────────────────
// HEADER COMPONENT (Floating Pills Style)
// ─────────────────────────────────────────────────────────────────────────────
const BuilderHeader = () => {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center p-4 bg-transparent gap-6 w-full z-10 pb-8 bg-gradient-to-b from-[#FAFAFA] from-[calc(100%-24px)] to-transparent" style={{ minWidth: '752px' }}>
      
      {/* Left: Logo & Campaign Name */}
      <div className="flex items-center gap-2 min-w-0 justify-start">
        <div className="flex items-center justify-center bg-white rounded-full border border-[#E4E7E5] p-1 shadow-[0_12px_64px_0_rgba(0,0,0,0.04)] shrink-0 gap-1.5 px-4 h-12" style={{ minWidth: '228px' }}>
          <div className="w-8 h-8 min-w-[32px] bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
            <span className="text-white text-xs font-bold">V</span>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-full bg-white px-[14px] py-2 overflow-hidden text-[#181B19] cursor-pointer hover:bg-[#0000000A] grow">
            <Settings size={18} className="shrink-0" />
            <span className="text-base leading-[22px] font-semibold whitespace-nowrap truncate min-w-[26px]">
              New campaign
            </span>
          </div>
        </div>
      </div>

      {/* Center: Tabs */}
      <div className="flex items-center gap-2 min-w-0 justify-center min-w-fit">
        <div className="flex items-center bg-transparent rounded-full border-none p-1 shrink-0 gap-2" style={{ minWidth: '250px' }}>
          
          <div className="flex items-center justify-center gap-2 rounded-full px-[14px] py-[10px] overflow-hidden cursor-pointer hover:bg-white grow text-[#181B19] bg-white shadow-[0_1px_3px_0_rgba(16,24,40,0.10),0_1px_2px_0_rgba(16,24,40,0.06)]">
            <FileText size={18} className="shrink-0" />
            <span className="text-base leading-[22px] font-semibold whitespace-nowrap">Script</span>
          </div>

          <div className="flex items-center justify-center gap-2 rounded-full px-[14px] py-[10px] overflow-hidden cursor-pointer hover:bg-[#0000000A] text-[#707B73] hover:text-[#181B19] bg-transparent flex-none">
            <Network size={18} className="shrink-0" />
            <span className="text-base leading-[22px] font-semibold whitespace-nowrap">Scenarios</span>
          </div>

          <div className="flex items-center justify-center gap-2 rounded-full px-[14px] py-[10px] overflow-hidden cursor-pointer hover:bg-[#0000000A] text-[#707B73] hover:text-[#181B19] bg-transparent flex-none">
            <GitBranch size={18} className="shrink-0" />
            <span className="text-base leading-[22px] font-semibold whitespace-nowrap">Workflow</span>
          </div>

        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2 min-w-0 justify-end">
        <div className="flex items-center bg-white rounded-full border border-[#E4E7E5] p-1 shadow-[0_12px_64px_0_rgba(0,0,0,0.04)] shrink-0 gap-1">
          <div className="flex items-center justify-center p-3 rounded-full hover:bg-[#0000000A] text-[#181B19] cursor-pointer shrink-0">
            <Plug2 size={20} />
          </div>
          <div className="flex items-center justify-center p-3 rounded-full hover:bg-[#0000000A] text-[#181B19] cursor-pointer shrink-0">
            <Clock size={20} />
          </div>
          <div className="flex items-center justify-center p-3 rounded-full hover:bg-[#0000000A] text-[#181B19] cursor-pointer shrink-0">
            <Bot size={20} />
          </div>
          <div className="flex items-center justify-center p-3 rounded-full hover:bg-[#0000000A] text-[#181B19] cursor-pointer shrink-0">
            <Settings size={20} />
          </div>
        </div>

        <div className="flex items-center bg-white rounded-full border border-[#E4E7E5] p-1 shadow-[0_12px_64px_0_rgba(0,0,0,0.04)] shrink-0">
          <Link href="/campaigns" className="flex items-center justify-center p-3 rounded-full hover:bg-[#0000000A] text-[#181B19] shrink-0">
            <X size={20} />
          </Link>
        </div>
      </div>
      
    </div>
  );
};


// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURATION MODAL
// ─────────────────────────────────────────────────────────────────────────────
const ConfigPanel = ({ onClose }: { onClose: () => void }) => {
  return (
    <div 
      className="absolute bg-white rounded-2xl shadow-[0px_24px_48px_-12px_rgba(16,24,40,0.08)] flex-col flex z-20" 
      id="suggestion-modal" 
      style={{ width: '690px', maxHeight: 'calc(100% - 64px)', right: '10%', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'all' }}
    >
      <header className="border-b w-full px-6 items-center flex gap-2.5 sticky top-0 z-[10001] bg-white rounded-t-2xl py-2">
        <div className="w-full flex flex-col">
          <textarea 
            className="flex-1 w-full content-center h-[24px] disabled:bg-white focus:outline-none caret-[#3655E8] placeholder:text-base font-semibold resize-none max-h-[130px] font-Inter placeholder:text-[#d1d6d2]" 
            placeholder="Subflow name e.g. Technical Support" 
            name="nestedSteps[0].title" 
            dir="ltr" 
            style={{ height: '50px' }}
            defaultValue="Intro Script"
          />
        </div>
        <div className="relative">
          <div>
            <button className="flex text-[#707B73] p-2 rounded-lg items-center hover:bg-neutral-50 hover:text-[#18181B] font-bold tracking-[2px]">
              •••
            </button>
          </div>
        </div>
        <div className="group hover:bg-neutral-50 p-2 rounded-lg cursor-pointer transition-colors" data-testid="script-panel-close-button" onClick={onClose}>
          <X className="w-5 h-5 text-[#70707B] group-hover:text-[#18181B] transition-colors" />
        </div>
      </header>

      <div className="w-full h-full py-6 pl-5 pr-6 overflow-auto">
        <div className="w-full relative">
          <div className="bottom-[10px] left-[17px] absolute w-[1px] bg-[#E4E4E7] top-[30px]"></div>
          
          {/* Step 1 Area */}
          <div id="tags-0" className="relative pl-10 pb-4 opacity-100">
            <div className="group relative w-full cursor-text">
              <div className="group/line z-10 absolute w-6 h-full top-0 -left-9 text-sm font-bold text-gray-500">
                <div data-testid="step-select-button" data-test-status="unselected" className="group/step left-[2px] transition-all z-10 absolute top-1/2 -translate-y-1/2 text-xs w-6 h-6 font-bold font-inter rounded-full border border-[#E4E4E7] flex items-center justify-center before:h-1/2 before:bg-white cursor-pointer bg-white text-gray-500 hover:bg-[#FAFAFA]">
                  <div className="relative" data-state="closed">
                    <div className="block h-full w-full group-hover:hidden">1</div>
                  </div>
                </div>
                <div className="absolute w-8 bg-white top-0 h-1/2 left-0 z-[-1]"></div>
              </div>
              <div className="flex flex-col gap-2 w-full h-full">
                <div className="relative group">
                  <div className="relative w-full h-full">
                    <div id="input-0" dir="ltr" className="relative group h-auto transition-transform resize-none w-full max-h-[500px] overflow-y-clip block px-4 pb-2.5 text-base text-gray-900 appearance-none focus:outline-none caret-[#3655E8] pt-6 hover:bg-zinc-100 bg-neutral-50 rounded-2xl border border-[#E4E4E7]" data-testid="input-0">
                      Hello, is this
                      <span className="tag-span inline-flex items-center gap-1 flex-wrap !font-inter !leading-none !py-0.5 !pl-1.5 !pr-2.5 transition-colors text-sm !rounded-[8px] translate-y-0.5 mx-1" style={{ backgroundColor: '#F2FDF5', color: '#3C7E44', border: '1px solid #D1EAD5', cursor: 'pointer' }}>
                        <Settings size={14} color="#3C7E44" />
                        Name
                      </span>?
                    </div>
                  </div>
                </div>
                <label className="pointer-events-none transition-all text-[#707B73] text-base absolute left-4 top-[9px] translate-y-0 text-[12px]">Step 1</label>
              </div>
            </div>
          </div>

          {/* Quick Actions Area */}
          <div className="flex relative ml-10 pt-2 panel-footer">
            <div className="flex items-center gap-1 flex-wrap w-full">
              <div>
                <button type="button" className="font-semibold text-[13px] gap-1.5 flex items-center rounded-full py-1.5 px-[12px] border-[#E4E4E7] bg-transparent text-[#18181B] hover:bg-[#FAFAFA] border shadow-sm" data-testid="add-step-button">
                  <Plus size={16} color="black"/>Step
                </button>
              </div>
              <div className="relative flex">
                <div>
                  <button type="button" className="font-semibold text-[13px] gap-1.5 flex items-center rounded-full py-1.5 px-[12px] border-[#E4E4E7] bg-transparent text-[#18181B] hover:bg-[#FAFAFA] border shadow-sm" data-testid="add-meeting-button">
                    <Plus size={16} color="black"/>Schedule a Meeting
                  </button>
                </div>
              </div>
              <div>
                <button type="button" className="font-semibold text-[13px] gap-1.5 flex items-center rounded-full py-1.5 px-[12px] border-[#E4E4E7] bg-transparent text-[#18181B] hover:bg-[#FAFAFA] border shadow-sm" data-testid="add-sms-button">
                  <Plus size={16} color="#70707B" className="opacity-70"/>SMS
                </button>
              </div>
              <div>
                <button type="button" className="font-semibold text-[13px] gap-1.5 flex items-center rounded-full py-1.5 px-[12px] border-[#E4E4E7] bg-transparent text-[#18181B] hover:bg-[#FAFAFA] border shadow-sm" data-testid="add-action-button">
                  <Plus size={16} color="#70707B" className="opacity-70"/>Action
                </button>
              </div>
              <div>
                <button type="button" className="font-semibold text-[13px] gap-1.5 flex items-center rounded-full py-1.5 px-[12px] border-[#E4E4E7] bg-transparent text-[#18181B] hover:bg-[#FAFAFA] border shadow-sm" data-testid="add-call-transfer-button">
                  <Plus size={16} color="#70707B" className="opacity-70"/>Call Transfer
                </button>
              </div>
              
              <div className="absolute top-0 h-[38px]">
                <div className="group/line z-10 absolute w-6 h-full top-0 -left-[37px] text-sm font-bold text-gray-500">
                  <div data-testid="step-select-button" data-test-status="unselected" className="group/step left-[2px] transition-all z-10 absolute top-1/2 -translate-y-1/2 text-xs w-6 h-6 font-bold font-inter rounded-full border border-[#E4E4E7] flex items-center justify-center before:h-1/2 before:bg-white cursor-default bg-white text-gray-500 hover:bg-[#FAFAFA]">
                    <div className="block h-full w-full text-center content-center">2</div>
                  </div>
                  <div className="absolute w-8 bg-white bottom-0 h-1/2 left-0 z-[-1]"></div>
                </div>
              </div>
              <div className="absolute w-8 bg-white bottom-0 h-1/2 h-[calc(100%-38px)] -left-10 z-[-1]"></div>
              
              <div>
                <button type="button" className="font-semibold text-[13px] gap-1.5 flex items-center rounded-full py-1.5 px-[12px] border-[#E4E4E7] bg-transparent text-[#18181B] hover:bg-[#FAFAFA] border shadow-sm" data-testid="add-end-call-button">
                  <Plus size={16} color="#70707B" className="opacity-70"/>End Call
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};


// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function NewCampaignBuilder() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = useCallback((changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
  const onEdgesChange = useCallback((changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);

  const selectedNode = nodes.find(node => node.selected);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#FAFAFA] font-sans">
      
      {/* The floating pills header is rendered within the fixed area so it overlays correctly */}
      <BuilderHeader />
        
      {/* React Flow Canvas */}
      <div className="flex-1 w-full h-full -mt-6 relative">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 2 }}
          proOptions={{ hideAttribution: true }}
        >
          {/* Default soft background */}
          <Background gap={24} color="#E4E7E5" size={2} />
          
          {/* Minimap in bottom right */}
          <MiniMap 
            position="bottom-right" 
            nodeColor="#e2e2e2" 
            maskColor="rgba(240, 240, 240, 0.6)" 
          />
        </ReactFlow>

        {/* Configuration Panel overlay shown when Intro Script is selected */}
        {selectedNode && selectedNode.id === "1" && (
          <ConfigPanel onClose={() => setNodes(nds => nds.map(n => ({...n, selected: false})))} />
        )}

        {/* Zoom Controls Overlay (Bottom Center) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex flex-row items-center justify-center z-10">
          <div className="flex items-center justify-start gap-1 p-1 bg-white border border-neutral-200 rounded-xl shadow-sm">
            <button className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-neutral-50 text-neutral-600 transition-colors">
              <Plus size={20} />
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-neutral-50 text-neutral-600 transition-colors">
              <Minus size={20} />
            </button>
            <div className="flex items-center justify-center px-4 py-2 text-sm font-semibold text-neutral-600 select-none">
              84%
            </div>
          </div>
        </div>

        {/* AI Chat Button Overlay (Bottom Left) */}
        <button 
          className="absolute left-4 bottom-4 z-20 bg-[#3655E8] hover:bg-blue-700 text-white rounded-full p-4 shadow-xl transition-all duration-200 hover:scale-105"
          aria-label="Open AI Chat"
        >
          <Sparkles size={24} className="fill-current" />
        </button>

      </div>
    </div>
  );
}
