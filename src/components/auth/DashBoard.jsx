import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  LinearProgress,
} from "@mui/material";
import { Upload } from "@mui/icons-material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// ------------------ Dummy Data ------------------

const stats = [
  { title: "Active RFPs", value: 12, trend: "+3" },
  { title: "In Progress Responses", value: 8, trend: "+2" },
  { title: "Submitted Responses", value: 34, trend: "+5" },
  { title: "Compliance Alerts", value: 3, trend: "-2" },
  { title: "Average Technical Score", value: "82%", trend: "+4" },
];

const pieData = [
  { name: "Draft", value: 12, color: "#F4A32C" },
  { name: "In Progress", value: 17, color: "#1A73E8" },
  { name: "Archived", value: 22, color: "#777" },
  { name: "Submitted", value: 49, color: "#3CBC98" },
];

const monthlyData = [
  { month: "Jun", count: 13 },
  { month: "Jul", count: 18 },
  { month: "Aug", count: 15 },
  { month: "Sep", count: 21 },
  { month: "Oct", count: 28 },
  { month: "Nov", count: 23 },
];

const recentActivity = [
  {
    title: "Cloud Infrastructure Services RFP",
    client: "Acme Corporation",
    deadline: "Nov 15, 2025",
    status: "In Progress",
    score: "78%",
  },
  {
    title: "Cybersecurity Assessment & Implementation",
    client: "TechStart Inc.",
    deadline: "Nov 22, 2025",
    status: "Compliance Review",
    score: "85%",
  },
  {
    title: "Enterprise Software Development",
    client: "Global Finance Ltd.",
    deadline: "Dec 1, 2025",
    status: "Draft",
    score: "72%",
  },
  {
    title: "Data Analytics Platform",
    client: "HealthCare Systems",
    deadline: "Oct 28, 2025",
    status: "Submitted",
    score: "91%",
  },
  {
    title: "Cloud Infrastructure Services RFP",
    client: "Acme Corporation",
    deadline: "Nov 15, 2025",
    status: "In Progress",
    score: "78%",
  },
  {
    title: "Cybersecurity Assessment & Implementation",
    client: "TechStart Inc.",
    deadline: "Nov 22, 2025",
    status: "Compliance Review",
    score: "85%",
  },
  {
    title: "Enterprise Software Development",
    client: "Global Finance Ltd.",
    deadline: "Dec 1, 2025",
    status: "Draft",
    score: "72%",
  },
  {
    title: "Data Analytics Platform",
    client: "HealthCare Systems",
    deadline: "Oct 28, 2025",
    status: "Submitted",
    score: "91%",
  },
];

const statusColor = {
  "In Progress": "#1976d2",
  Draft: "#ffa600",
  "Compliance Review": "#ed5f0d",
  Submitted: "#2e7d32",
};
// ------------------ Component ------------------

const Dashboard = () => {
  return (
    <>
      <Box
        p={2}
        sx={{
          overflowY: "auto",
          backgroundColor: "var(--page-bg)",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "var(--border)",
            borderRadius: "10px",
          },
        }}>
        <Box
          p={1}
          mb={2}>
          {/* Header */}

          <Box
            display='flex'
            justifyContent='space-between'
            p={0}
            m={0}
            alignItems='center'>
            <Box
              display={"flex"}
              flexDirection={"column"}>
              <Typography
                variant='h7'
                color='var(--text)'
                fontWeight={600}>
                RFP Overview Dashboard
              </Typography>
              <Typography
                variant='body2'
                fontSize={11}
                fontWeight={100}
                color='var(--subtext)'>
                Monitor and manage all your RFP responses
              </Typography>
            </Box>
            <Box
              display='flex'
              gap={2}>
              <Button
                variant='outlined'
                size='small'
                startIcon={<Upload />}
                sx={{
                  borderRadius: 0.5,
                  fontSize: "0.6rem",
                  padding: "3px 6px",
                }}>
                Upload RFP
              </Button>

              <Button
                variant='contained'
                size='small'
                startIcon={<AddOutlinedIcon />}
                sx={{
                  borderRadius: 0.5,
                  fontSize: "0.6rem",
                  padding: "3px 6px",
                }}>
                New Response
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Stats Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
          }}>
          {stats.map((item, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 150,
                backgroundColor: "var(--card-bg)",
                color: "var(--text)",
                border: "1px solid var(--border)",
                flex: {
                  xs: "1 1 100%",
                  sm: "1 1 calc(50% - 16px)",
                  md: "1 1 calc(20% - 16px)",
                },
              }}>
              <CardContent>
                <Typography
                  variant='body2'
                  display='flex'
                  alignItems='center'
                  justifyContent='flex-end'
                  color={
                    item.trend.includes("-") ? "error.main" : "success.main"
                  }>
                  <ArrowOutwardIcon
                    fontSize='10'
                    sx={{
                      transform: item.trend < 0 ? "rotate(90deg)" : "",
                      transition: "0.2s",
                    }}
                  />
                  {item.trend}
                </Typography>

                <Typography variant='body2'>{item.value}</Typography>
                <Typography
                  fontSize={12}
                  variant='body2'
                  sx={{ whiteSpace: "nowrap" }}
                  color='gray'>
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Charts Section */}
        <Grid
          container
          spacing={2}
          justifyContent='space-between'
          width={"100%"}
          mt={2}>
          {/* Pie Chart */}
          <Grid
            item
            width={{ md: "100%", lg: "49%" }}
            xs={(12, { minWidth: 0 })}
            md={6}>
            <Card
              sx={{
                height: 350,
                backgroundColor: "var(--card-bg)",
                color: "var(--text)",
                border: "1px solid var(--border)",
                width: "100%",
              }}>
              <CardContent>
                <Typography
                  mb={2}
                  fontSize={14}
                  fontWeight={500}>
                  Response Status Distribution
                </Typography>

                <PieChart
                  width={"100%"}
                  height={300}>
                  <Pie
                    data={pieData}
                    dataKey='value'
                    nameKey='name'
                    outerRadius={90}
                    labelLine={false}
                    label={({ name, value, index, x, y, cx }) => {
                      const offset = 18;

                      const direction = x >= cx ? 1 : -1;

                      return (
                        <text
                          x={x + direction * offset}
                          y={y}
                          fill={pieData[index].color}
                          fontSize={12}
                          fontWeight={600}
                          textAnchor={direction === 1 ? "start" : "end"}
                          dominantBaseline='middle'>
                          {name} ({value})
                        </text>
                      );
                    }}>
                    {pieData.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={entry.color}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </CardContent>
            </Card>
          </Grid>

          {/* Line Chart */}
          <Grid
            item
            width={{ md: "100%", lg: "49%" }}
            xs={(12, { minWidth: 0 })}
            md={6}>
            <Card
              sx={{
                height: 350,
                width: "100%",
                backgroundColor: "var(--card-bg)",
                color: "var(--text)",
                border: "1px solid var(--border)",
              }}>
              <CardContent>
                <Typography
                  mb={2}
                  fontSize={14}
                  fontWeight={500}>
                  Monthly RFP Submissions
                </Typography>

                <LineChart
                  width={"100%"}
                  height={250}
                  data={monthlyData}>
                  <XAxis
                    dataKey='month'
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Line
                    type='monotone'
                    dataKey='count'
                    stroke='#1A73E8'
                    strokeWidth={3}
                  />
                </LineChart>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Recent Activity Table */}
        <Card
          sx={{
            mt: 2,
            mb: 2,
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--border)",
          }}>
          <CardContent>
            <Typography
              mb={2}
              fontSize={14}
              sx={{ color: "var(--text)" }}
              fontWeight={500}>
              Recent Activity{" "}
            </Typography>

            <TableContainer sx={{ maxHeight: 400 }}>
              <Table
                size='small'
                stickyHeader>
                <TableHead>
                  <TableRow
                    sx={{
                      "& td": {
                        borderBottom: "1px solid var(--border)",
                      },
                    }}>
                    {[
                      "RFP Title",
                      "Client",
                      "Deadline",
                      "Status",
                      "Score",
                      "Actions",
                    ].map((t) => (
                      <TableCell
                        key={t}
                        sx={{
                          fontSize: 12,
                          backgroundColor: "var(--card-bg)",
                          color: "var(--text)",
                          borderBottom: "1px solid var(--border)",
                        }}>
                        {t}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentActivity.map((item, i) => (
                    <TableRow
                      key={i}
                      sx={{
                        "& td": {
                          borderBottom: "1px solid var(--border)",
                        },
                      }}>
                      <TableCell sx={{ fontSize: 12, color: "var(--text)" }}>
                        {item.title}
                      </TableCell>
                      <TableCell sx={{ fontSize: 12, color: "var(--text)" }}>
                        {item.client}
                      </TableCell>
                      <TableCell sx={{ fontSize: 12, color: "var(--text)" }}>
                        {item.deadline}
                      </TableCell>

                      <TableCell>
                        <Chip
                          label={item.status}
                          size='small'
                          sx={{
                            padding: "0 5px",
                            margin: 0,
                            height: 18,
                            borderRadius: "4px",
                            backgroundColor: `${statusColor[item.status]}20`,
                            color: statusColor[item.status],

                            "& .MuiChip-label": {
                              padding: 0,
                              fontSize: "10px",
                              lineHeight: 1,
                            },
                          }}
                        />
                      </TableCell>

                      <TableCell sx={{ fontSize: 12, color: "var(--subtext)" }}>
                        <LinearProgress
                          variant='determinate'
                          value={Number(item.score.replace("%", ""))}
                          sx={{
                            height: 8,
                            borderRadius: 5,
                            backgroundColor: "var(--border)",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: "1A73E8",
                            },
                          }}
                        />
                        {item.score}
                      </TableCell>

                      <TableCell>
                        <Button
                          size='small'
                          sx={{ fontSize: 10 }}>
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Dashboard;
