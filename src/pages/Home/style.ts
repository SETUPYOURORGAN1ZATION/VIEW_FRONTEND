import styled from "styled-components";
import font from "styles/font";

export const Layout = styled.div`
  overflow: hidden;
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.img`
  position: relative;
  width: 100%;
  margin-bottom: 30px;
`;

export const StudentId = styled.div`
  position: absolute;
  top: 20%;
  left: 15%;
  color: #cccccc;
  ${font.H2}
  font-weight: 500;
`;

export const Name = styled.div`
  position: absolute;
  top: 25%;
  left: 15%;
  color: white;
  ${font.D3}
`;

export const Text = styled.div`
  ${font.H3}
  margin-bottom: 20px;
`;

export const Box = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
`;

export const PassTicketBox = styled.div`
  padding: 2.5% 3%;
  display: flex;
  flex-direction: column;
  width: 50%;
  aspect-ratio: 8/3;
  box-shadow: -1px 0px 4px rgba(0, 0, 0, 0.08);
`;

export const PassTicketMainText = styled.div`
  ${font.H2}
  font-weight: 500;
`;

export const ContentBox = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  height: 100%;
  gap: 10%;
`;

export const ReasonBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  height: 100%;
`;

export const PassTicketText = styled.div`
  font-size: 1.2rem;
  margin-bottom: 2%;
`;

export const ReasonArea = styled.textarea`
  margin-top: 10px;
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  outline: none;
  padding: 2.5% 3.5%;
  font-size: 1.2rem;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
`;

export const DateAndSubmitBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 35%;
  height: 30%;
`;

export const DateBox = styled.div`
  margin-top: -30px;
  display: flex;
  gap: 20px;
  font-size: 1.2rem;
  padding: 5% 5%;
  align-items: center;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
`;

export const DateInput = styled.input`
  border: none;
  font-size: 1.2rem;
  background-color: transparent;
  outline: none;
`;

export const SubmitButton = styled.div`
  display: flex;
  border-radius: 5px;
  padding: 8% 0;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #0085ff;
  cursor: pointer;
`;

export const TodayAttendBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  padding: 2.5% 3%;
  box-shadow: -1px 0px 4px rgba(0, 0, 0, 0.08);
  margin-right: 2px;
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20%;
`;

export const Empty = styled.div`
  height: 40%;
`;

export const HeaderText = styled.div`
  ${font.H2}
  font-weight: 500;
`;

export const TodayStatus = styled.div`
  height: 65%;
  aspect-ratio: 1;
  background-color: #0085ff;
  border-radius: 50px;
`;

export const TodayStatusText = styled.div`
  ${font.D3}
  font-size: 2.5rem;
  font-weight: 600;
`;

export const StudentIdAndName = styled.div`
  margin-top: 10px;
  ${font.H3}
  color: #999999;
  font-weight: 500;
`;
