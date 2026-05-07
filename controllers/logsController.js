
app.get("/api/logs", async (req, res) => {
  try {
    const logsPath = path.join(logsDir, "access.log");

    const logs = fs.readFileSync(logsPath, "utf8");

    res.status(200).json({
      success: true,
      logs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});