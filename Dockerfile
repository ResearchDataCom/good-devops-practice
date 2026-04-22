# Use Debian as the base image
FROM debian:stable-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /app

# Install system dependencies, Python, pip, and make
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    python3 python3-pip python3-venv python3-dev make build-essential git curl jq && \
    rm -rf /var/lib/apt/lists/*

# Copy project files
COPY . /app/


# Create and activate a virtual environment, install dependencies
RUN python3 -m venv /app/.venv \
    && /app/.venv/bin/pip install --upgrade pip setuptools wheel \
    && if [ -f requirements.txt ]; then /app/.venv/bin/pip install --no-cache-dir -r requirements.txt; fi \
    && /app/.venv/bin/pip install --no-cache-dir sphinx sphinx-autobuild sphinx_rtd_theme

# Build the docs at image build time
ENV PATH="/app/.venv/bin:$PATH"
RUN make

# Expose port for sphinx-autobuild (default 8000)
EXPOSE 8000

# Default command: serve docs with live reload
CMD ["sphinx-autobuild", "docs", "_build/html", "--host", "0.0.0.0", "--port", "8000"]

