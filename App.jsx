import React, { useState } from 'react';
import { MapPin, Search, Bell, Users, Plus, Smartphone, Sparkles, ChevronRight, CheckCircle2, Flame, UserCheck } from 'lucide-react';

export default function WeGolfIndexPage() {
  const [selectedRegion, setSelectedRegion] = useState('강남구');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 실시간 둘러보기용 번개 데이터 (웹 노출용)
  const joinRooms = [
    {
      id: 1,
      afterTag: '🍻 식사/치맥 가능',
      gameTag: '💸 핸디 내기 가능',
      title: '퇴근 후 강남역 스크린 한게임 치고 치맥하실 분! 🍗',
      location: '골프존파크 강남역점',
      time: '오늘 20:00',
      payType: '게임비 1/N',
      members: [
        { id: 'm1', name: '강남버디왕', gender: 'M', age: '30대 초반', isHost: true, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop', tierColor: 'border-purple-500' },
        { id: 'm2', name: '역삼아이언', gender: 'M', age: '30대 후반', isHost: false, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', tierColor: 'border-indigo-400' },
        { id: 'm3', name: '골프퀸', gender: 'F', age: '20대 후반', isHost: false, avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop', tierColor: 'border-pink-400' }
      ],
      targetCapacity: { male: 2, female: 2 }
    },
    {
      id: 2,
      afterTag: '🙋‍♂️ 쿨하게 골프만',
      gameTag: '🏆 진검승부',
      title: '판교 80타대 진검승부! 게임만 깔끔하게 치고 귀가합니다',
      location: '골프존파크 판교테크노점',
      time: '오늘 19:30',
      payType: '꼴찌가 매장비 내기',
      members: [
        { id: 'm4', name: '판교아이언맨', gender: 'M', age: '30대 후반', isHost: true, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', tierColor: 'border-purple-600' },
        { id: 'm5', name: '분당싱글', gender: 'M', age: '40대 초반', isHost: false, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop', tierColor: 'border-slate-400' }
      ],
      targetCapacity: { male: 4, female: 0 }
    }
  ];

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f9a7]/30 text-slate-900 font-sans flex flex-col justify-between">
      
      {/* 1. 상단 인덱스 헤더 (웹/모바일 겸용) */}
      <header className="w-full bg-[#e2f56e] border-b border-lime-300 sticky top-0 z-20 shadow-sm">
        <div className="max-w-md mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-1.5 font-black text-xl text-slate-900 tracking-tight">
            <span className="bg-purple-700 text-[#e2f56e] p-1 rounded-lg text-sm">WE</span>
            <span>GOLF</span>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold px-3 py-2 rounded-xl transition-all shadow-sm flex items-center gap-1"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>앱 다운로드</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. 메인 웹 뷰어 (앱 모의 화면) */}
      <main className="max-w-md mx-auto w-full flex-1 bg-slate-50 border-x border-lime-200 shadow-xl flex flex-col relative overflow-hidden">
        
        {/* 지역 선택 바 */}
        <div className="p-3.5 bg-white flex justify-between items-center border-b border-slate-100">
          <div className="flex items-center gap-1 font-bold text-base text-slate-800">
            <MapPin className="w-4 h-4 text-purple-700" />
            <select 
              value={selectedRegion} 
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="bg-transparent font-extrabold focus:outline-none cursor-pointer"
            >
              <option value="강남구">서울 강남구</option>
              <option value="판교">성남 판교</option>
              <option value="분당구">성남 분당구</option>
            </select>
          </div>
          <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-2 py-1 rounded-md border border-purple-100 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            실시간 번개 중
          </span>
        </div>

        {/* 상단 홍보 배너 (웹 전용) */}
        <div className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white p-4 mx-3 mt-3 rounded-2xl shadow-sm">
          <div className="flex items-center gap-1.5 text-xs text-lime-300 font-bold mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>현직 프로가 검증한 스크린 조인</span>
          </div>
          <h2 className="font-extrabold text-base leading-snug">
            내 근처 스크린 번개 모임,<br />앱 없이도 미리 둘러보세요!
          </h2>
        </div>

        {/* 실시간 피드 리스트 */}
        <div className="p-3 space-y-3 flex-1 overflow-y-auto">
          {joinRooms.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:border-purple-200 transition-all">
              
              <div className="flex flex-wrap gap-1.5 mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-purple-100 text-purple-800">
                  {room.afterTag}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-indigo-50 text-indigo-700">
                  {room.gameTag}
                </span>
                <span className="ml-auto text-xs font-semibold text-slate-400">{room.time}</span>
              </div>

              <h3 className="font-bold text-slate-900 text-sm mb-1">{room.title}</h3>
              <p className="text-xs text-purple-700 font-semibold mb-3">📍 {room.location}</p>

              {/* 참여자 프로필 스택 */}
              <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2 overflow-hidden">
                    {room.members.map((member) => (
                      <img
                        key={member.id}
                        src={member.avatar}
                        alt={member.name}
                        className={`w-8 h-8 rounded-full object-cover border-2 ${member.tierColor} ring-1 ring-white`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-slate-700">
                    👑 {room.members.find(m => m.isHost)?.name}
                  </span>
                </div>
                
                <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">
                  남2 / 여1 (모집중)
                </span>
              </div>

              {/* 웹에서 클릭 시 어플 설치 / 사전예약 모달 유도 */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-[#e2f56e] hover:bg-[#d6eb59] text-slate-900 font-extrabold py-2.5 rounded-xl shadow-sm text-xs flex justify-center items-center gap-1 transition-all"
              >
                <span>이 번개에 참여 신청하기</span>
                <ChevronRight className="w-4 h-4" />
              </button>

            </div>
          ))}
        </div>

        {/* 하단 고정 하단바 (웹-앱 전환 CTA) */}
        <div className="p-3 bg-white border-t border-slate-100 sticky bottom-0 z-10">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-purple-700 hover:bg-purple-800 text-white font-extrabold py-3.5 rounded-xl shadow-lg text-sm flex justify-center items-center gap-2 transition-transform active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-lime-300" />
            <span>앱으로 3초 만에 번개 개설하기</span>
          </button>
        </div>

      </main>

      {/* 3. 푸터 영역 */}
      <footer className="w-full py-6 text-center text-xs text-slate-500 border-t border-lime-200 mt-4">
        <p className="font-bold text-slate-700 mb-1">위골프 (WeGolf) | 강남·판교·분당 스크린골프 조인</p>
        <p>Copyright © 2026 WeGolf. All rights reserved.</p>
      </footer>

      {/* 4. 앱 다운로드 & 사전예약 모달 팝업 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-30 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full space-y-4 shadow-2xl relative animate-in fade-in zoom-in">
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold"
            >
              ✕
            </button>

            {!isSubmitted ? (
              <>
                <div className="text-center space-y-2">
                  <span className="bg-lime-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full border border-lime-200">
                    🚀 파일럿 오픈 알림 신청
                  </span>
                  <h3 className="font-black text-xl text-slate-900 pt-1">
                    위골프 앱 다운로드
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    강남·판교·분당 스크린 조인이 시작됩니다.<br />
                    전화번호를 남겨주시면 **앱 출시 알림 & 무료 번개 티켓**을 보내드립니다!
                  </p>
                </div>

                <form onSubmit={handlePhoneSubmit} className="space-y-2 pt-2">
                  <input 
                    type="tel" 
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="010-0000-0000" 
                    className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-purple-600 bg-slate-50 text-center font-bold"
                  />
                  <button 
                    type="submit"
                    className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3.5 rounded-xl shadow-md transition-all text-sm flex justify-center items-center gap-1"
                  >
                    <span>알림 받고 앱 다운로드 링크 받기</span>
                  </button>
                </form>

                <div className="pt-2 border-t border-slate-100 flex justify-center gap-4 text-[11px] text-slate-400 font-medium">
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> PASS 본인인증</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> 노쇼 클린 시스템</span>
                </div>
              </>
            ) : (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-black text-lg text-slate-900">신청이 완료되었습니다!</h3>
                <p className="text-xs text-slate-500">
                  앱 출시 즉시 SMS로 **우선 다운로드 링크**와<br />**무료 번개 개설 티켓**을 발송해 드리겠습니다.
                </p>
                <button 
                  onClick={() => { setIsModalOpen(false); setIsSubmitted(false); }}
                  className="w-full bg-slate-100 text-slate-700 font-bold py-2.5 rounded-xl text-xs"
                >
                  닫기
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
